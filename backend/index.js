import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

app.use("/api/user",userRoute);
app.listen(port, () => 
console.log(`server running on port:${port}`));
