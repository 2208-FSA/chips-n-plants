const Sequelize = require('sequelize')
const db = require('../db')

const OrdersProducts = db.define('ordersProducts', {

  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  priceAtPurchase: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = OrdersProducts