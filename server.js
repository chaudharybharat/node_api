const express = require("express");
const dotenv= require("dotenv").config();
const app=express();
const port =process.env.PORT || 5000;

const contactsRoute=require("./router/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api/contacts",contactsRoute);
app.use(errorHandler);
app.listen(port,()=>{
    console.log('server runing on port '+port);
});

