const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');

const db= async ()=>{
    try
    {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected...");
     }
     catch(err){
        console.error("MongoDB connection error:",err.message);
        process.exit(1);
     }

};
module.exports = db;