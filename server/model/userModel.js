import mongoose from "mongoose";


const userSchema=mongoose.Schema({  
    name:String,
    email:String,
    password:String,
    phoneNumber:Number,
    walletAddress:String,
    dob:String,
    role:String,
    collections:Number,
    transactions:Number,
});


const userModel=mongoose.model('userModel',userSchema);
export default userModel;