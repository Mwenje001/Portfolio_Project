const { addExpense, getExpenses, deleteExpense } = require('../Controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../Controllers/income');

const router = require('express').Router();



router.post('/add-income', addIncome)
.get('/get-income', getIncomes)
.delete('/delete-income/:id', deleteIncome)

.post('/add-expense', addExpense)
.get('/get-expense', getExpenses)
.delete('/delete-expense/:id', deleteExpense)

module.exports = router;