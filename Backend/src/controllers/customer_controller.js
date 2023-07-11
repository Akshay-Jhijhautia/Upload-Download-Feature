const { CustomerService } = require("../services");

async function getAllData(req, res) {
  try {
    const customer = await CustomerService.getAllData();
    return res.status(200).json({ data: customer });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

module.exports = {
  getAllData,
};
