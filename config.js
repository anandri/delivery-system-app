var config = module.exports;
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:4uJE4xUDjYr1Pfin@cluster0.8rkjr.mongodb.net/dev-sys?retryWrites=true&w=majority',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
},(err)=>{
    if(!err) {
         console.log('DB Connected')
    }else {
         console.log('DB Not Connected' + err)  
    }
});