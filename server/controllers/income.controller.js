import { Income } from "../models/income.model.js";
import AppError from "../utils/error.util.js";
     
const addIncome = async (req, res, next) => {

    try {
        const {title, amount, category, description, date} = req.body;

        if(!title || !category || !description || !date) {
            return next(new AppError('All fields (title, amount, date, category, description) are required', 400));
        };
        
        if(amount <= 0 || !amount === 'number') {
            return next(new AppError('Amount must be a positive!', 400));
        };
        
        const income = await Income.create({
            title, 
            amount, 
            category, 
            description, 
            date
        });
        
        await income.save();
        res.status(200).json({mesg: 'Income added'});
    } catch (error) {
        return next(new AppError('Server Error!', 500));
    }     
}

const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find().sort({ created: -1});
        res.status(200).json(incomes);
    } catch(e) {
        return next(new AppError('Server Error!', 500));
    }
}

const deleteIncome = async (req, res) => {
    const {id} = req.params;
    Income.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({mesg: 'income deleted'});
    })
    .catch((err) => {
        return next(new AppError('Server Error!', 500));
    })
}

export {
    addIncome,
    getIncomes,
    deleteIncome
};