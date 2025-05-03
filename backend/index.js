import path from "path";
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'  // added cors import
//utiles
 import connectDB from './config/db.js'    
 import userRoute from './routes/userRoute.js'
 import categoryRoutes from './routes/categoryRoutes.js';
 import productRoutes from './routes/productRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import formidable from 'express-formidable';

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }))  // added cors middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

/* Removed express-formidable middleware globally to avoid conflict with multer in upload route */
// app.use(formidable());

app.use("/api/users",userRoute);
app.use('/api/category',categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes)

 const __dirname=path.resolve();
 app.use("/uploads",express.static(path.join(__dirname, "uploads")));

app.listen(port, () => 
console.log(`server running on port:${port}`));
