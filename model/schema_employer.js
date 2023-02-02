const mongoose=require("mongoose");

const stdschema=new mongoose.Schema({
    oganization_name:{
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
         iso_certificate:{
            type:String,
            unique:[true,"Iso_certificate already exist"],
         },
    password:{
        type:String
    }
});
const std= new mongoose.model("employer",stdschema);
module.exports=std;