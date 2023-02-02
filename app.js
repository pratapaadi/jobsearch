const express= require("express");
const app = express();
const path = require("path");
const schema_applicant = require("./model/schema_applicant");
const schema_employer = require("./model/schema_employer");
require("./connection/conn");
const port = process.env.PORT||5000;
const static2 = path.join(__dirname,"./home_page")

 
 app.use(express.static(static2));



 app.get("/",function(req,res){
      
    res.sendFile(static2+"/job.html");
});
app.get("/login",function(req,res){
      
    res.sendFile(static2+"/sign.html");
});
app.post("/login", async (req,res)=>{
    const email= req.body.email;
    const pass = req.body.password;
    try{
        const adnew = await schema_applicant.findOne({email:email})||schema_employer.findOne({email:email});
        if(adnew.password===pass)
        {
            res.send(adnew);
        }
        else
        {
            res.send("user name or password is not matching");
        }
    }catch(e){
        res.status(400).send(e);
    }

})

app.get("/signup_employer",function(req,res){
      
    res.sendFile(static2+"/form.html");
});
app.post("/signup_employer", async function(req,res){
    try{
        const user = new schema_employer(req.body);
        const adnew= await user.save();
        res.status(201).send(adnew);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/signup_applicant",function(req,res){
      
    res.sendFile(static2+"/form.html");
});
app.post("/signup_applicant",async function(req,res){

    const data = {
        name :req.body.name ,mobile_number:req.body.mobile_number  ,email:  req.body.email,password: req.body.password ,
    }
    try{
        const user = new schema_applicant(req.body);
        const adnew= await user.save();
        res.status(201).send(adnew);
    }catch(e){
        res.status(400).send(e);
    }
})
app.listen(port, function(){
    console.log("Server is up...");
})