import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

//routes
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import commentRouter from "./routes/comment.routes.js";
import connectDb from "./lib/connectDb.js";
import webhookRouter from "./routes/webhook.routes.js";

import { clerkMiddleware, requireAuth } from "@clerk/express";
import logger from "./lib/logger.js";

app.use(cors());
app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json());
app.use(logger); 



app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        message: error.message || "Something went wrong!",
        status: error.status,
        stack: error.stack,
    });
});

app.listen(3000, () => {
    connectDb();
    console.log("Server is running on port 3000");
})