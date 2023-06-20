const IncomeSchema = require('../Modules/income_mod')


exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date} = req.body;

    const income = IncomeSchema({
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
        await income.save()
        res.status(200).json({message: "Success"})
    } 
    catch (error) {
        res.status(500).json({message: "Error saving income"})
    }

    console.log(income);
}


exports.getIncomes = async (req, res) => {
    try {
            const incomes = await IncomeSchema.find().sort({createdAt: -1})
            res.status(200).json(incomes)
        } catch (error) {
            res.status(500).json({message: "Error getting incomes"})
        }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message: "Success"})
    })
    .catch ((error) => {
        res.status(500).json({message: "Error deleting income"})
    })
}