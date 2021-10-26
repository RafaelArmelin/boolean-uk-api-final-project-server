const express = require("express");

const router = express.Router(); 

const {
    getAllQuestions,
    getQuestionById,
    addOneQuestion
} = require("./controller")

router.get("/", getAllQuestions);

router.get("/:id",getQuestionById)

router.post("/user/:id", addOneQuestion)

module.exports = router;