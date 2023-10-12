
const Sequelize=require('sequelize')
const Expense=require('../models/exp_sequelize');



exports.getExpense=async (req,res,next)=>{
    console.log("welcome");
    try {
        const data=await Expense.findAll();
        console.log(data);
        res.status(200).json({allExpenses:data})
        
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(600).json(error)
    }
}

    
    exports.addExpense= async (req,res,next)=>


    {
        if(!req.body.author||!req.body.description||!req.body.title)
        {
            console.log('missing req fields');
            return res.sendStatus(500)
        }


        try {
        const author=req.body.author;
        const description=req.body.description;
        const title=req.body.title;
        
        console.log(author,description,title);
    
    const data=await Expense.create({
            author:author,
            description:description,
            title:title
        });

        console.log('updated success');
    
        res.status(201).json({newExpense:data})
} catch (error) {
    
    console.log(error,JSON.stringify(error))

     res.status(501).json({error})
    
}

    }




exports.deleteExpense= async (req,res,next)=>{
try {

    if(!req.params.id||req.params.id==='undefined')
    {
        console.log('ID is Missing');
        return res.sendStatus(420)
    }
    const expenseId=req.params.id;
    
    await Expense.destroy({where:{id:expenseId}})
    res.sendStatus(200);
    console.log(`sucessfully deleted ${expenseId}`);
} catch (error) {
    console.log(JSON.stringify(error));
    res.status(404).json({error})
    
}




}

// Function to get the current date and time



// exports.deleteExpense= async (req,res,next)=>{
//     try {
//         if(req.params.id == 'undefined')
//         {
    
//             console.log('ID is Missing');
//             return res.status(400).json({err:'Id is missing'})
//         }
//          const userId=req.params.id;
//          await Expense.destroy({where:{id:userId}});
//          res.sendStatus(200);
//        } catch (err) {
//         console.log(err);
//         res.status(500).json(err)
//        }




// }