const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const UserScema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },

 
    email: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },

    token:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        required:true,
    }

  

 
}) ;


// now we need to create Collection
const user= mongoose.model("user",UserScema) ;
module.exports=user;

