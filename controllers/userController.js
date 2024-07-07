const asyncHandler =require("express-async-handler");
const bcrypt =require("bcrypt");
var jwt = require('jsonwebtoken');

const User =require("../models/userModel");
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser =asyncHandler(async (req,res) =>{
    const {username,email,password}= req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All field are mandatory");
    }
    const userAvailable =await User.collection.findOne({email});
     if(userAvailable){
        res.status(400);
        throw new Error("User alreday registered")
     }
     //hash password
     const hashedPassword=await bcrypt.hash(password,10);
     console.log("Hashed Password",hashedPassword);
      const user=await User.create({
        username,
        email,
        password:hashedPassword
      });
      console.log("user created",user);
      if(user){
        res.status(201).json({_id:user.id,email:user.email});
      }else{
        res.status(400);
        throw new Error("User Data not valid");
      }

    res.json({message:"register the ffuser"});

});

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser =asyncHandler(async (req,res) =>{

  const {email,password} =req.body;
  if(!email || !password){
    res.status(400);
    throw new Error("All Fiiled are mandatory");
  }
  const user=await User.findOne({email});
  //compare password with hashpassword
  if(user && (await bcrypt.compare(password,user.password))){
    const accessToken= jwt.sign({
      user:{
        username:user.username,
        email:user.email,
        id:user.id
      }
    },process.env.ACESS_TOKEN_SECERT,
  {expiresIn:"15m"});
    res.status(200).json({accessToken})
  }else{
    res.status(401);
    throw new Error("Email and Password is not valid");
  }
   //  res.json({message:"login the user"});

});

//@desc login a user
//@route POST /api/users/login
//@access private
const currentUser =asyncHandler(async (req,res) =>{
    res.json({message:"current the user"});
});

module.exports={registerUser,loginUser,currentUser};