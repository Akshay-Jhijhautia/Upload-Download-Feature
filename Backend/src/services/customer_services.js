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

function readCsvFile(file) {
  const results = [];
  fs.createReadStream(file.path)
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", async () => {
      try {
        await customerRepository.saveCsvToDatabase(results);
        return "Successfully saved the data in database";
      } catch (error) {
        console.log(error);
        return new Error("Something went wrong");
      } finally {
        fs.unlinkSync(file.path);
      }
    });
}

module.exports = {
  getAllData,
  readCsvFile,
};
