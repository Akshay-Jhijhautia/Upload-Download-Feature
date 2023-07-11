"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Customer_Name: {
        type: Sequelize.STRING,
      },
      Relationship_Manager_Name: {
        type: Sequelize.STRING,
      },
      Loan_Amount: {
        type: Sequelize.STRING,
      },
      Documents_Submitted: {
        type: Sequelize.STRING,
      },
      Documents_Reviewed: {
        type: Sequelize.STRING,
      },
      Loan_Disbursed: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Customers");
  },
};
