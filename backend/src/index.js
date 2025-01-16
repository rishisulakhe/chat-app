import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
import cors from "cors"
import { app ,server } from './lib/socket.js';

dotenv.config();
app.use(express.json())
app.use(express.json({ limit: '50mb' })); // Set the limit as needed (e.g., '50mb', '100mb')
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser())


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)


const PORT=process.env.PORT;
server.listen(PORT,()=>{
    console.log("Server is running on portal 3000");
    connectDB();
})