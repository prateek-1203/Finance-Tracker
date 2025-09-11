const mongoose=require('mongoose');
const { Schema } = mongoose;

const transactionSchema= new Schema({
  title:{type:String,required:true},
  amount:{type:Number,required:true},
  date:{ type: Date, default: Date.now },
  category:{type:String,required:true}
});

transactionSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);