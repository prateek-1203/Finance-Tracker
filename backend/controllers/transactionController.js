const Transaction=require('../models/Transaction');

exports.createTransaction= async(req,res)=>{
    const transaction = new Transaction(req.body);

    try{
        const doc=await transaction.save();
        res.status(201).json(doc);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
}