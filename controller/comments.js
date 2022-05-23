const comments = require('../data/comments')

const getAllComments = (req, res)=>{
    res.json(comments)
}
//create a const variable
const getCommentsById = (req, res)=>{
    console.log('Inside /GET comments route')
    console.log(req.params.id)
    let foundComments = comments.find((comments) => {
        return comments._id == req.params.id
    }) 
    res.json(foundComments)
}
const postComment = (req,res)=>{
    console.log(req.body)
    const newId = comments.length + 1 
    const body = {
        _id: newId, 
        body: req.body.body,
        postId: 1
    }
    comments.push(body)
    res.json(comments)
}
module.exports = {getAllComments, getCommentsById, postComment}