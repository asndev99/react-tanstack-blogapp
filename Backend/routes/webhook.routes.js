import express from "express";
import { clerkWebHook } from "../Controller/webhook.controller.js";
const router = express.Router();
import bodyParser from "body-parser";

router.post("/clerk", bodyParser.raw({ type: "application/json" }), clerkWebHook)

export default router;