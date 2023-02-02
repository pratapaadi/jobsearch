const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aditya:aditya1234@cluster0.93objed.mongodb.net/test",
).then(()=> console.log("connected ...."))
.catch(()=>console.log("not connected"));