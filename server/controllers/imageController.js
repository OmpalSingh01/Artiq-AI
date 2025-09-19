
import axios from "axios";
import userModel from "../models/userModel.js";
import ImageModel from "../models/imageModel.js";
import FormData from "form-data";
import cloudinary from "../config/cloudinary.js";

// Generate image & upload
export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const { id: userId } = req.user;

    const user = await userModel.findById(userId);
    if (!user || !prompt) return res.json({ success: false, message: "Missing Details" });
    if (user.creditBalance <= 0)
      return res.json({ success: false, message: "No Credit Balance 💰", creditBalance: user.creditBalance });

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      { headers: { "x-api-key": process.env.CLIPDROP_API, ...formData.getHeaders() }, responseType: "arraybuffer" }
    );

    // Upload to Cloudinary
    const base64 = Buffer.from(data, "binary").toString("base64");
    const uploadResult = await cloudinary.uploader.upload(`data:image/png;base64,${base64}`, {
      folder: "generated_images",
    });

    const imageUrl = uploadResult.secure_url;

    // Save image in DB
    const newImage = new ImageModel({ userId, url: imageUrl });
    await newImage.save();

    // Deduct credit
    await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage: imageUrl,
    });
  } catch (error) {
    console.log(error.message + " ❌");
    res.json({ success: false, message: error.message });
  }
};

// Get all images for user
export const getGallery = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const images = await ImageModel.find({ userId }).sort({ createdAt: -1 });
    res.json({ success: true, images });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Delete single image by URL
export const deleteImage = async (req, res) => {
  try {
    const { url } = req.body;
    const { id: userId } = req.user;
    if (!url) return res.json({ success: false, message: "Image URL required" });

    await ImageModel.deleteOne({ userId, url });
    res.json({ success: true, message: "Image deleted" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Clear all images
export const clearGallery = async (req, res) => {
  try {
    const { id: userId } = req.user;
    await ImageModel.deleteMany({ userId });
    res.json({ success: true, message: "Gallery cleared" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
