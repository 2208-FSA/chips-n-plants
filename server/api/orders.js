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

// =============================================================================
// ======================= product order specific routes =======================
// =============================================================================

//ADD a new product to order
router.post("/:orderId/add_product", async (req, res, next) => {
  try {
    const orderToAddProduct = await Orders.findByPk(req.params.orderId, {
      include: Product,
    })
    await orderToAddProduct.addProduct(req.body.productId)
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

// todo //////////////////////
// gets an order AND its associated products, to update quantity
// recieve req.body.productId
// api route should access the orderId
router.put("/:orderId/add_quantity", async (req, res, next) => {
  try {
    let orderId = req.params.orderId
    const singleOrder = await Orders.findByPk(orderId, {
      include: [
        {
          model: Product,
          // model: OrdersProducts,
        },
      ],
      // where: {productId: 1,},
    })

    console.log("=================")
    console.log("prod ID to add: ", req.body.productId)
    // console.log(singleOrder)

    res.send(singleOrder)
  } catch (err) {
    console.log("Error in PUT /:orderId/add_quantity", err)
  }
})

// for now only fully remove an item
router.put("/:orderId/remove_product", async (req, res, next) => {
  try {
    const orderToRemoveProduct = await Orders.findByPk(req.params.orderId, {
      include: Product,
    })
    // see the magic methods
    // console.log(Object.keys(orderToRemoveProduct.__proto__))
    await orderToRemoveProduct.removeProduct(req.body.productId)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

module.exports = router
