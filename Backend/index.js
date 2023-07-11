const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const customerRoutes = require("./src/routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/customer", customerRoutes);

app.get("/", (req, res) => {
  res.send("Server Healthy");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
