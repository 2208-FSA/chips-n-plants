//this is the access point for all things database related!

const db = require("./db")

const User = require("./models/User")
const Orders = require("./models/Orders")
const OrdersProducts = require("./models/OrdersProducts")
const Product = require("./models/Product")
const ProductImage = require("./models/ProductImage")
const UserCustomer = require("./models/UserCustomer")

//associations could go here!
Orders.belongsTo(User)
User.hasMany(Orders)

// Orders.hasMany(OrdersProducts)
// OrdersProducts.hasMany(Orders)

// OrdersProducts.hasMany(Product)
// Product.hasMany(OrdersProducts)

//KL added
// many to many relationship needs to use "belongsToMany" for both models
// instead of has many
Orders.belongsToMany(Product, { through: OrdersProducts })
Product.belongsToMany(Orders, { through: OrdersProducts })

ProductImage.belongsTo(Product)
Product.hasMany(ProductImage)

module.exports = {
  db,
  models: {
    User,
    Orders,
    OrdersProducts,
    Product,
    ProductImage,
    UserCustomer,
  },
}
