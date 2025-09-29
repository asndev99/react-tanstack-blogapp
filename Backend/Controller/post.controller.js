import cloudinary from "../lib/cloudinary.config.js";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";


export const getPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;

        const posts = await Post.find()
            .populate("user", "username img")
            .limit(limit)
            .skip((page - 1) * limit);

        const totalPosts = await Post.countDocuments();
        const hasMore = page * limit < totalPosts;

        return res.status(200).json({ posts, hasMore });
    } catch (error) {
        console.error("Error in getting posts", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug }).populate("user", "username img");
        res.status(200).json(post);
    }
    catch (error) {
        console.log("Error in getting post", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
}

export const createPost = async (req, res) => {
    try {

        console.log(req.file);
        const clerkUserId = req.auth.userId;

        console.log(req.headers);

        if (!clerkUserId) {
            return res.status(401).json("Not authenticated!");
        }

        const user = await User.findOne({ clerkUserId });

        if (!user) {
            return res.status(404).json("User not found!");
        }

        let slug = req.body.title.replace(/ /g, "-").toLowerCase();

        let existingPost = await Post.findOne({ slug });

        let counter = 2;

        while (existingPost) {
            slug = `${slug}-${counter}`;
            existingPost = await Post.findOne({ slug });
            counter++;
        }

        let url = null;
        if (req.file) {
            url = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream({ folder: "profile_pictures" }, (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    })
                    .end(req.file.buffer);
            });

        }

        const newPost = new Post({ user: user._id, slug, img: url.secure_url ?? null, ...req.body });

        const post = await newPost.save();
        res.status(200).json(post);
    } catch (error) {
        console.log("Error in creating post", error);
        return res.status(500).json({ message: "Something Went Wrong" });
    }
}

export const deletePost = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user";

    if (role === "admin") {
        await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json("Post has been deleted");
    }

    const user = await User.findOne({ clerkUserId });

    const deletedPost = await Post.findOneAndDelete({
        _id: req.params.id,
        user: user._id,
    });

    if (!deletedPost) {
        return res.status(403).json("You can delete only your posts!");
    }

    res.status(200).json("Post has been deleted");
};