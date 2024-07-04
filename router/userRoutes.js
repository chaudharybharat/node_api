const express =require("express");

const router= express.Router();

router.post("/register",(req,res) =>{
    res.json({message:"register the user"});

});

router.post("/login",(req,res) =>{
    res.json({message:"Login the user"});

});

router.post("/currentUser",(req,res) =>{
    res.json({message:"Login the user"});

});
module.exports =router;