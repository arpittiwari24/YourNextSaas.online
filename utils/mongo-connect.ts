import mongoose from "mongoose";

export default async function connectMongoDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI!,{
            dbName: "users"
        })
        console.log("connected to mongodb database")
    } catch (error) {
        console.log(error)
    }
}