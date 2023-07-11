const express = require("express");
const router = express.Router();

const customerRoutes = require("./customer_routes");

router.use("/loanDetails", customerRoutes);

module.exports = router;
