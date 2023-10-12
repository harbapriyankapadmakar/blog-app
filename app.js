const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const app=express();
 

const sequelize=require('./utilis/database');
const dB=require('./models/exp_sequelize')
const expenseRoutes=require('./routes/expenseroutes');



app.use(cors());
app.use(bodyParser.json());
app.use('/expense',expenseRoutes);





sequelize.sync()
.then((res)=>{
    var port =3000;
    app.listen(port , ()=>{
        console.log(`port${port} started successfully`);
    })
})
.catch((err)=>{
 console.log(`Failed to Synchronise port`,JSON.stringify(err));
})