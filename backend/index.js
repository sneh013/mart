import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
//utiles
 import connectDB from './config/db.js'
 import userRoute from './routes/userRoute.js'

// app.use("/api/user",userRoute);
 dotenv.config();
 const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.get('/', (req, res) => {
    res.send('API is running...')
});
app.listen(port, () => 
console.log(`server running on port:${port}`));
