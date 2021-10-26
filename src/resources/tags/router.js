const express = require("express");

const router = express.Router(); 

const { getAllTags } = require("./controller")

router.get("/", getAllTags);

module.exports = router;