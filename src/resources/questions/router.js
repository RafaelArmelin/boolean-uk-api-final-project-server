const express = require("express");

const router = express.Router(); 

const { getAllQuestions, getQuestionById } = require("./controller")

router.get("/", getAllQuestions);

router.get("/:id",getQuestionById)

module.exports = router;