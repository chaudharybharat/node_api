const { mongoose } = require("mongoose");


const contactSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please add contact name"]
    },
    email:{
        type:String,
        require:[true,"Please add contact email"]
    },
},{
    timestamps:true
});

module.exports = mongoose.model("Contact",contactSchema);