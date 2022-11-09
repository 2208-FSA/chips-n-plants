const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vendor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Product