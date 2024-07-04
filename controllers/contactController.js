const asyncHandler =require("express-async-handler");

const Contact =require("../models/contactsModel");

//const { MongoClient } = require("mongodb");
//@ desc Get All contacts
//@route GET /api/contacts
//@access pubic
const getContacts = asyncHandler(async (req,res)=>{
    const contacts= await Contact.find();
    res.status(200).json(contacts);
});



//@ desc create new contacts
//@route POST /api/contacts
//@access pubic
const createContact =asyncHandler(async (req,res)=>{

    const {name, email} =req.body;
    console.log("This name"+name);
      if(!name || !email){
        res.status(400);
        throw new Error("All fileds are mandatory");
      }
    console.log("This request"+req.body);
     const contact=await Contact.create({
        name,email
     })
    res.status(201).json({message:"Create contact"});
});

//@ desc GET One contact
//@route GET /api/contacts:id
//@access pubic
const getContact =asyncHandler(async (req,res)=>{
   const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    } 
    res.status(200).json(contact);
   
});

//@ desc update contact
//@route PUT /api/contacts:id
//@access pubic
const updateContact =asyncHandler(async (req,res)=>{
   const contact =await Contact.findById(req.params.id);
   if(!contact){
    res.status(404);
    throw new Error("Contact not found");
} 
const updateContact=await Contact.findByIdAndUpdate(req.params.id,
    req.body,{new:true}
)
    res.status(200).json(updateContact);
});

//@ desc Delete contact/:id
//@route DELETE /api/contacts
//@access pubic
const deleteContact =asyncHandler(async (req,res)=>{
//     const contact =await Contact.findById(req.params.id);
//     if(!contact){
//      res.status(404);
//      throw new Error("Contact not found");
//  } 


    const contact = await Contact.findByIdAndRemove(req.params.id)

    if(!contact){
        res.status(404).send('Contact not found')
    } else{
   
        res.status(200).send('deleted Sucessfully')
    }

});

module.exports ={getContacts,createContact,getContact,updateContact,deleteContact}
