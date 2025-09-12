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

exports.getTransactions = async (req, res) => {
  try {
    const docs = await Transaction.find();
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const doc = await Transaction.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.updateTransaction = async (req, res) => {
  try {
    const doc = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!doc) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};


exports.deleteTransaction = async (req, res) => {
  try {
    const doc = await Transaction.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
};