const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-complete','root','Priyanka@123',{
   
    dialect:'mysql', 
    host:'localhost'
 
});

module.exports=sequelize;
