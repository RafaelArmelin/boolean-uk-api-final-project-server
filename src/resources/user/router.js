const express = require("express");

const { createOne, getAllUsers, deleteOneById } = require("./controller");

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createOne);

router.delete("/:id", deleteOneById);

module.exports = router;
