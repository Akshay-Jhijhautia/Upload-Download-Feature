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
      Customer_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Relationship_Manager_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Loan_Amount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Documents_Submitted: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Documents_Reviewed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Loan_Disbursed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
