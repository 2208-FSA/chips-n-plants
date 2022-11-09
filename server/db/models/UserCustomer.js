const Sequelize = require('sequelize')
const db = require('../db')

const UserCustomer = db.define('userCustomer', {

  cartId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  orderNum: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  currencyType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

})

module.exports = UserCustomer