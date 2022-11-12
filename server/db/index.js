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

ProductImage.belongsTo(Product)
Product.hasMany(ProductImage) // KL added

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
