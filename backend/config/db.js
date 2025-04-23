import mongoose from 'mongoose'

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error('MongoDB connection FAIL: MONGO_URI environment variable is not set')
    process.exit(1)
  }
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.error('MongoDB connection FAIL:', error.message)
    process.exit(1)
  }
}

export default connectDB;
