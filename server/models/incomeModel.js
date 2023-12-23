import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 70,
        trim: true       
    },
    type: {
        type: String,
        default: "income"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String, 
        required: true,
        trim: true,
        maxLength: 20
    }
}, {timestamps: true});

export const model = mongoose.model('Income', incomeSchema);