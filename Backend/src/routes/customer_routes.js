const express = require("express");
const router = express.Router();

const { CustomerController } = require("../controllers");

router.get("/", CustomerController.getAllData);

module.exports = router;
