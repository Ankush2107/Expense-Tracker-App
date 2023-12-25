import { Expense } from "../models/expense.model.js";
import AppError from "../utils/error.util.js";
     
const addExpense = async (req, res, next) => {

    try {
        const {title, amount, category, description, date} = req.body;

        if(!title || !category || !description || !date) {
            return next(new AppError('All fields (title, amount, date, category, description) are required', 400));
        };
        
        if(amount <= 0 || !amount === 'number') {
            return next(new AppError('Amount must be a positive!', 400));
        };
        
        const expense = await Expense.create({
            title, 
            amount, 
            category, 
            description, 
            date
        });
        
        await expense.save();
        res.status(200).json({mesg: 'Expense added'});
    } catch (error) {
        return next(new AppError('Server Error!', 500));
    }     
}

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ created: -1});
        res.status(200).json(incomes);
    } catch(e) {
        return next(new AppError('Server Error!', 500));
    }
}

const deleteExpense = async (req, res) => {
    const {id} = req.params;
    Expense.findByIdAndDelete(id)
    .then((expense) => {
        res.status(200).json({mesg: 'Expense deleted'});
    })
    .catch((err) => {
        return next(new AppError('Server Error!', 500));
    })
}

export {
    addExpense,
    getExpenses,
    deleteExpense
};