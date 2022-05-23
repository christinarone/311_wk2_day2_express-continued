const express = require("express");
const commentsController = require('../controller/comments')

const router = express.Router()

router.get("/", commentsController.getAllComments)

router.get("/:id", commentsController.getCommentsById)

router.post("/comments", commentsController.postComment)

module.exports = router