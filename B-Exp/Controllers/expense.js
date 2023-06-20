const ExpenseSchema = require('../Modules/expense_mod')


exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date} = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try 
    {
        //verifying
        if(!title || !amount || !category || !description || !date) {
            return res.status(400).json({
                            message: "Please fill all fields"
                        })
        }
        if(amount <= 0 || amount=== "number") 
        {
            return res.status(400).json({
                            message: "The amount must be a number"
                        })
        }
        await expense.save()
        res.status(200).json({message: "Success"})
    } 
    catch (error) {
        res.status(500).json({message: "Error saving expense"})
    }

    console.log(expense);
}


exports.getExpenses = async (req, res) => {
    try {
            const expenses = await ExpenseSchema.find().sort({createdAt: -1})
            res.status(200).json(expenses)
        } catch (error) {
            res.status(500).json({message: "Error getting expenses"})
        }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
        res.status(200).json({message: "Success"})
    })
    .catch ((error) => {
        res.status(500).json({message: "Error deleting expense"})
    })
}