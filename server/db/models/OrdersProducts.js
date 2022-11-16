const Sequelize = require("sequelize")
const db = require("../db")
const Orders = require("./Orders")
const Product = require("./Product")

const OrdersProducts = db.define("ordersProducts", {
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //KL added below
    references: {
      model: Orders,
      key: "id",
    },
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    //KL added below
    references: {
      model: Product,
      key: "id",
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    // allowNull: false,
    allowNull: true,
  },
  priceAtPurchase: {
    type: Sequelize.FLOAT,
    // allowNull: false,
    allowNull: true,
  },
})

module.exports = OrdersProducts
