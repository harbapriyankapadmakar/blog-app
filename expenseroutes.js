const express=require('express');

const routes=express.Router();


const expenseController=require('../controller/exp_controller');


routes.get('/get-expense',expenseController.getExpense);
routes.post('/add-expense',expenseController.addExpense)
routes.delete('/delete-expense/:id',expenseController.deleteExpense);


module.exports=routes;
