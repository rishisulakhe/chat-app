import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
const app=express();
dotenv.config();
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server is running on portal 3000");
    connectDB();
})