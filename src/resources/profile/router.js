const express = require("express");

const { createOne, updateOneById, getProfileById } = require("./controller");

const router = express.Router();

router.post("/", createOne);

router.put("/:id", updateOneById);

router.get("/:id", getProfileById);

module.exports = router;
