import mongoose from "mongoose"

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected");
    }
    catch(error){
        console.log("Error in connecting to mongodb",error);
        process.exit(1);
    }
}

export default connectDb;