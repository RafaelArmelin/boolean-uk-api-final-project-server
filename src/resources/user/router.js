const express = require("express");

const { createOne, getAllUsers } = require("./controller");

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createOne);

module.exports = router;
