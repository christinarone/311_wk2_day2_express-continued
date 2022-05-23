const contacts = require('../data/contacts')

const getAllContacts = (req, res)=>{
    res.json(contacts)
}

const getContactsById = (req, res)=>{
    console.log('Inside /GET contacts route')
    console.log(req.params.id)
    let foundContacts = contacts.find((contacts) => {
        return contacts._id == req.params.id
    }) 
    res.json(foundContacts)
}
//create a const variable
const postContact = (req,res)=>{
    console.log(req.body)
    const newId = contacts.length + 1 
    const body = {
        _id: newId, 
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }
    //for the others change the body & look at the data
    
    contacts.push(body)
    res.json(contacts)
}

module.exports = {getAllContacts, getContactsById, postContact}