const CrudRepository = require("./crudRepository");
const { Customer } = require("../models");

class CustomerRepository extends CrudRepository {
  constructor() {
    super(Customer);
  }
}

module.exports = CustomerRepository;
