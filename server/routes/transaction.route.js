import { addIncome, getIncomes, deleteIncome } from "../controllers/income.controller.js";
import { addExpense, getExpenses, deleteExpense } from "../controllers/expense.controller.js";
import { Router } from "express";

const router = Router();

router.post('/add-income', addIncome);
router.get('/get-incomes', getIncomes);
router.delete('/delete-income/:id', deleteIncome)
router.post('/add-expense', addExpense);
router.get('/get-expenses', getExpenses);
router.delete('/delete-expense/:id', deleteExpense)

export default router ;