const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "tmp/csv" });

const { CustomerController } = require("../controllers");

router.get("/", CustomerController.getAllData);
router.post("/upload", upload.single("file"), CustomerController.readCsvFile);

module.exports = router;
