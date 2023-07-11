const { CusotmerRepository } = require("../repositories");

const customerRepository = new CusotmerRepository();

async function getAllData() {
  try {
    const customer = await customerRepository.getAllData();
    return customer;
  } catch (error) {
    throw new Error("Cannot get the data if the user");
  }
}

module.exports = {
  getAllData,
};
