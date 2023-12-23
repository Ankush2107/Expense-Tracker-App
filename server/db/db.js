import mongoose from 'mongoose';

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database is Connected');
    } catch(error) {
        console.log('DB connection error');
    }
}

export default db;