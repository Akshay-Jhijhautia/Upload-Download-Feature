"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init(
    {
      Customer_Name: DataTypes.STRING,
      Relationship_Manager_Name: DataTypes.STRING,
      Loan_Amount: DataTypes.STRING,
      Documents_Submitted: DataTypes.STRING,
      Documents_Reviewed: DataTypes.STRING,
      Loan_Disbursed: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
