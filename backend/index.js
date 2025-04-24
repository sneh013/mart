import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
 app.use("/api/users",userRoutes);

 
app.listen(port, () => 
console.log(`server running on port:${port}`));
