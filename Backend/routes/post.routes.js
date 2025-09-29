import express from "express";
import { createPost, deletePost, getPost, getPosts } from "../Controller/post.controller.js";
const router = express.Router();

import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1025 //5mb
    }
})



router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", upload.single("file"), createPost);
router.delete("/:id", deletePost);
// router.patch("/feature", featurePost);


export default router;