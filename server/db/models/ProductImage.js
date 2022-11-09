const Sequelize = require('sequelize')
const db = require('../db')

const ProductImage = db.define('productImage', {

productId: {
    type: Sequelize.INTEGER,
    allowNull: false
},
alt: {
    type: Sequelize.STRING,
    allowNull: false
},
src: {
    type: Sequelize.STRING,
    allowNull: false
},
height: {
    type: Sequelize.INTEGER,
    allowNull: false
},
width: {
    type: Sequelize.INTEGER,
    allowNull: false
},
position: {
    type: Sequelize.INTEGER,
    allowNull: false
}
});

module.exports = ProductImage