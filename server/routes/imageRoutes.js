
import express from "express";
import { generateImage, getGallery, deleteImage, clearGallery } from "../controllers/imageController.js";
import userAuth from "../middlewares/auth.js";

const imageRouter = express.Router();

imageRouter.post("/generate-image", userAuth, generateImage);

// New endpoints for gallery
imageRouter.get("/gallery", userAuth, getGallery);
imageRouter.delete("/delete-by-url", userAuth, deleteImage);
imageRouter.delete("/clear/all", userAuth, clearGallery);

export default imageRouter;
