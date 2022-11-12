const router = require("express").Router()
const {
  models: { Orders, OrdersProducts, Product },
} = require("../db")

router.get("/", async (req, res, next) => {
  try {
    const allOrders = await Orders.findAll()
    res.send(allOrders)
  } catch (err) {
    console.log("Error in GET ALL", err)
  }
})

// gets an order AND its associated products
router.get("/:id", async (req, res, next) => {
  try {
    let orderId = req.params.id
    const singleOrder = await Orders.findByPk(orderId, { include: Product })
    res.send(singleOrder)
  } catch (err) {
    console.log("Error in GET /ID", err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const newOrder = await Orders.create(req.body)
    res.send(newOrder)
  } catch (err) {
    console.log("Error in POST", err)
  }
})

router.put("/:orderId", async (req, res, next) => {
  try {
    const orderToUpdate = await Orders.findByPk(req.params.orderId)
    res.send(await orderToUpdate.update(req.body))
  } catch (err) {
    next(err)
  }
})

module.exports = router
