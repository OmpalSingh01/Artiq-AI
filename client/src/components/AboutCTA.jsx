import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutCTA = () => {
  const text = "Ready to Bring Your Ideas to Life?";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const speed = isDeleting ? 50 : 100;
  const pauseTime = 1500;

  // Typewriter Effect
  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && displayedText === text) {
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setLoop(loop + 1);
    } else {
      typingTimeout = setTimeout(() => {
        const updatedText = isDeleting
          ? text.substring(0, displayedText.length - 1)
          : text.substring(0, displayedText.length + 1);
        setDisplayedText(updatedText);
      }, speed);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loop]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}
      className="relative bg-gradient-to-r from-blue-500 to-blue-400 py-16 px-6 text-center text-white rounded-3xl shadow-lg mt-20"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 min-h-[3rem]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
          Join thousands of creators, businesses, and students who are already
          turning imagination into stunning visuals with our AI-powered tools.
          Your creativity deserves no limits.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/result"
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-700 transition"
          >
            Contact Us
          </motion.a>
        </div>
      </div>

      {/* Decorative blurred shapes */}
      {/* <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl opacity-30"></div> */}
    </motion.section>
  );
};

export default AboutCTA;
