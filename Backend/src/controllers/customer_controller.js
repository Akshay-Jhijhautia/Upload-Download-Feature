const { CustomerService } = require("../services");

async function getAllData(req, res) {
  try {
    const customer = await CustomerService.getAllData();
    return res.status(200).json({ data: customer });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

async function readCsvFile(req, res) {
  console.log("line 13 in controller");
  const file = req.file;
  if (!file) {
    res.status(400).send("No file uploaded");
    return;
  }
  const data = await CustomerService.readCsvFile(file);
  console.log(data);
  return res.status(200).json({ message: "Success" });
}

module.exports = {
  getAllData,
  readCsvFile,
};
