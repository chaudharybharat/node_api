const express= require("express");
const router = express.Router();

const {getContact,createContact,deleteContact,updateContact,getContacts}  =require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);



module.exports =router;