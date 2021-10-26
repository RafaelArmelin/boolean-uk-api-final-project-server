const express = require("express");

const { createOne, updateOneById } = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.put("/:id", updateOneById);

module.exports = router;
