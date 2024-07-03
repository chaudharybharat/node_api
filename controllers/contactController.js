const asyncHandler =require("express-async-handler");
//@ desc Get All contacts
//@route GET /api/contacts
//@access pubic
const getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"get all Contacts"});
});



//@ desc create new contacts
//@route POST /api/contacts
//@access pubic
const createContact =asyncHandler(async (req,res)=>{
    console.log("This request"+req.body);
    const {name,email} =req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("All filed are madatory");
    }
    res.status(201).json({message:"Create contact"});
});

//@ desc GET One contact
//@route GET /api/contacts:id
//@access pubic
const getContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:"get one Contact "+req.params.id});
});

//@ desc update contact
//@route PUT /api/contacts:id
//@access pubic
const updateContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Update contact"+req.params.id});
});

//@ desc Delete contact/:id
//@route DELETE /api/contacts
//@access pubic
const deleteContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:"delete contact for"+req.params.id});
});

module.exports ={getContacts,createContact,getContact,updateContact,deleteContact}
