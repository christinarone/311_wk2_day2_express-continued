const express = require("express");
const contactsController = require('../controller/contacts')

const router = express.Router()

router.get("/", contactsController.getAllContacts)

router.get("/:id", contactsController.getContactsById)

router.post("/contacts", contactsController.postContact)

module.exports = router