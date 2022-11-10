const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {

  productId: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  billingAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  productQuantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Orders;