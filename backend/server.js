const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB = require('./db');
const transactionRouter=require('./routes/transactionRoutes')

const app=express();
app.use(express.json());
dotenv.config();
app.use(cors());

connectDB();
app.use('/api/transactions', transactionRouter.router);
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is listening on the port number ${PORT}`);
});

