
import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { Send } from "lucide-react";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [gallery, setGallery] = useState([assets.sample_img_1]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);


  const { generateImage, fetchGallery, deleteImageFromDB, clearGalleryDB } = useContext(AppContext);

  // Fetch gallery from DB
  useEffect(() => {
    const loadGallery = async () => {
      const savedImages = await fetchGallery();
      if (savedImages.length > 0) setGallery([assets.sample_img_1, ...savedImages]);
    };
    loadGallery();
  }, []);

  // Generate new image
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input) return;

    setLoading(true);
    const result = await generateImage(input);
    if (result) {
      setImage(result);
      setGallery((prev) => [result, ...prev]);
      setIsImageLoaded(true);
      setInput(""); // ✅ clear prompt after generating
    //   setTimeout(() => {
    //   window.location.reload();
    // });
    }

    setLoading(false);
  };

 

const handleDelete = imgUrl => setDeleteTarget(imgUrl);


  // Clear gallery
  const handleClearGallery = async () => {
    await clearGalleryDB();
    setGallery([assets.sample_img_1]);
    setImage(assets.sample_img_1);
    setIsImageLoaded(false);
    setShowConfirm(false);
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onSubmit={onSubmitHandler}
        className="flex flex-col min-h-[90vh] justify-center items-center px-4"
      >
        {/* Main Image */}
        <div className="relative group w-full max-w-sm">
          <img
            src={image}
            alt="Generated"
            className="w-full rounded-2xl shadow-lg border border-zinc-200 transition-transform duration-300 group-hover:scale-[1.02]"
          />

           {/* Loading Progress Bar */}
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 rounded-r-full ${
              loading ? "w-full transition-all duration-[8s] ease-linear" : "w-0"
            }`}
          ></span>

          {/* Loading */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Input */}
        {!isImageLoaded && (
          <div className="flex flex-col sm:flex-row w-full max-w-xl bg-white/90 backdrop-blur-sm text-sm p-2 mt-10 rounded-2xl shadow-md border border-zinc-200 gap-2 sm:gap-0">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe what you want to generate..."
              className="flex-1 bg-transparent outline-none px-4 py-2 text-zinc-700 placeholder:text-zinc-400 rounded-xl sm:rounded-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-xl sm:rounded-full transition-all duration-300 text-center"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        )}

        {/* Generated Image Controls */}

       {isImageLoaded && (
  <div className="flex flex-col sm:flex-row gap-3 flex-wrap justify-center text-sm p-1 mt-10 w-full max-w-xl">
    {/* Generate Another */}
    <button
      onClick={() => {
        setIsImageLoaded(false);
        setInput("");
      }}
      className="w-full sm:w-auto px-8 py-3 rounded-xl sm:rounded-full border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-all duration-300"
    >
      Generate Another
    </button>

    {/* Download */}
    <a
      href={image.replace("/upload/", "/upload/fl_attachment/")}
      className="w-full sm:w-auto px-10 py-3 rounded-xl sm:rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 text-white shadow-md hover:from-black hover:to-zinc-900 transition-all duration-300 text-center"
      download
    >
      Download
    </a>

    {/* Share (icon only) */}
    <button
      onClick={async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: "Check out this AI-generated image",
              text: "Made using Artiq AI ✨",
              url: image,
            });
          } catch (err) {
            console.error("Share failed:", err);
          }
        } else {
          alert("Sharing is not supported in this browser.");
        }
      }}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300"
    >
      <Send size={20} />
    </button>
  </div>
)}



        {/* Gallery */}
        {gallery.length > 1 && (
          <div className="w-full max-w-2xl mt-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-700 font-semibold">Previous Generations</h3>
              <button
                onClick={() => setShowConfirm(true)}
                className="text-sm px-4 py-2 rounded-full border border-red-400 text-red-500 hover:bg-red-50 transition-all duration-300"
              >
                Clear Gallery
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-3 px-2 sm:px-0">
              {gallery.map((img, idx) => (
                <div key={idx} className="cursor-pointer shrink-0 relative group">
                  <img
                    src={img}
                    alt={`Generated ${idx}`}
                    className={`h-24 w-24 object-cover rounded-lg border ${
                      img === image ? "border-blue-500 shadow-md" : "border-zinc-300"
                    } hover:scale-105 transition-transform duration-300`}
                    onClick={() => {
                      setImage(img);
                      setIsImageLoaded(true);
                    }}
                  />
                  {img !== assets.sample_img_1 && (
                    <button
                      onClick={() => handleDelete(img)}
                     

                      className="absolute top-0 right-0  bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xstransition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
  
                    >
                      ×  
                      
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.form>

      {/* Clear Gallery Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg w-[90%] max-w-sm text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-zinc-800 mb-3">Clear Gallery?</h2>
              <p className="text-sm text-zinc-600 mb-6">
                This will remove all previously generated images. Are you sure?
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-5 py-2 rounded-full border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-all"
                >
                  Cancel
                </button>
                <button onClick={handleClearGallery} className="px-5 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all">
                  Yes, Clear
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

       {/* Delete Single Image Modal */}
      <AnimatePresence>
        {deleteTarget && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg w-[90%] max-w-sm text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-zinc-800 mb-3">
                Delete this image?
              </h2>
              <p className="text-sm text-zinc-600 mb-6">
                This will remove the selected image from your gallery.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setDeleteTarget(null)
                    
                  }
                  
                  className="px-5 py-2 rounded-full border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    try {
                      const deleted = await deleteImageFromDB(deleteTarget);
                      if (deleted) {
                        toast.success("Image deleted successfully!");
                        setGallery(prev => prev.filter(g => g !== deleteTarget));
                        if (image === deleteTarget) {
                          setImage(assets.sample_img_1);
                          setIsImageLoaded(false);
                        }
                      } else {
                        toast.error("Failed to delete image");
                      }
                    } catch (err) {
                      toast.error("Something went wrong");
                    }
                    setDeleteTarget(null);
                  }}
                  className="px-5 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all"
                >
                  Delete

                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
 
    </>
  );
};

export default Result;



 