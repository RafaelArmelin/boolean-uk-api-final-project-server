const express = require("express");

const router = express.Router();

const {
  getAllQuestions,
  getQuestionById,
  addOneQuestion,
  deleteQuestionById,
} = require("./controller");

router.get("/", getAllQuestions);

router.delete("/:id", deleteQuestionById);

router.get("/:id", getQuestionById);

router.post("/user/:id", addOneQuestion);

module.exports = router;
