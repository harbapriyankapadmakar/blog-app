const Sequelize=require('sequelize');

const sequelize=require('../utilis/database')

const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    author:{
        type:Sequelize.STRING,
        allowNull:false

    }
});

module.exports=Expense;