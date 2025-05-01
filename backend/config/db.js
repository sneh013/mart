import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`successfully connected to MongoDB`);
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
export default connectDB;

// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,  // Avoid the deprecated URL parser
//             useUnifiedTopology: true  // Use the new topology engine
//         });
//         console.log(`Successfully connected to MongoDB`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);  // Exit the process if the connection fails
//     }
// }

// export default connectDB;
