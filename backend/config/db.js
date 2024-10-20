import mongoose from 'mongoose';

/**
 * Connects to the MongoDB database using the connection string stored
 * in the MONGO_URI environment variable. If the connection is
 * successful, logs a success message to the console. If the connection
 * fails, logs an error message to the console and then terminates the
 * process with a non-zero exit status.
 */
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
            console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB