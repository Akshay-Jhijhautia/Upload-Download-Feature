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
  try {
    const file = req.file;
    if (!file) {
      res.status(400).send("No file uploaded");
      return;
    }
    CustomerService.readCsvFile(file);
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

module.exports = {
  getAllData,
  readCsvFile,
};
