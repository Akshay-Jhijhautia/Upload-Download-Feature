class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async getAllData() {
    const response = await this.model.findAll();
    return response;
  }

  async saveCsvToDatabase(data) {
    const response = await this.model.bulkCreate(data);
    return response;
  }
}

module.exports = CrudRepository;
