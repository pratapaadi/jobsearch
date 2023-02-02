const mongoose=require("mongoose");

const stdschema=new mongoose.Schema({
    name:{
        type:String,
    },
    mobile_number:{
        type:Number,
        unique:[true,"phone number already exist"],  
    },
    email:{
        type:String,
        unique:[true,"email already exist"],
         },
    password:{
        type:String
    }
});
const std= new mongoose.model("applicant",stdschema);
module.exports=std;