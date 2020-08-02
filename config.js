var config = module.exports;
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/admin',{
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