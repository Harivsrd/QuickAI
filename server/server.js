import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {v2 as cloudinary } from 'cloudinary';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express()


await connectCloudinary();

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


app.get('/', (req,res)=>res.send("Server is Live"))

app.use(requireAuth())
app.use('/api/ai',aiRouter)
app.use('/api/user',userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running  on port ',PORT)
})