import mongoose from 'mongoose'

export const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDD connected")
    }
    catch{
        console.log("Error while connecting to MongoDB")
    }
}