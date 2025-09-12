const express=require('express');
const {createTransaction,getTransactions,getTransactionById,updateTransaction,deleteTransaction}=require('../controllers/transactionController');

const router=express.Router();

router.post('/',createTransaction)
      .get('/',getTransactions)
      .get('/:id',getTransactionById)
      .put('/:id',updateTransaction)
      .delete('/:id',deleteTransaction)


exports.router=router;