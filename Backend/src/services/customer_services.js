const fs = require("fs");
const csv = require("csv-parser");

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

async function readCsvFile(file) {
  const results = [];
  fs.createReadStream(file.path)
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      console.log("line 26 in services", results);
    });
  return "Success";
}

module.exports = {
  getAllData,
  readCsvFile,
};
