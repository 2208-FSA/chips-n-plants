const router = require("express").Router()

router.use("/products", require("./Products"))
router.use("/users", require("./users"))
router.use("/orders", require("./orders"))
router.use("/orders_products", require("./ordersProducts"))

router.use((req, res, next) => {
  const error = new Error("Not Found")
  error.status = 404
  next(error)
})

module.exports = router
