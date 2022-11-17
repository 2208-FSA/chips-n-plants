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

// ! ////////////////////////////////////////////////
// 1. Using the prodID target it's quantity.
// 2. use instance.update to update that quantity

// api/orders/:orderId/add_quantity

// recieves quantity and productID
router.put("/:orderId/add_quantity", async (req, res, next) => {
  try {
    console.log("I AM IN THE API ADD PRODUCT TO ORDER QUANTITY ==========")
    console.log(req.body)

    let orderId = req.params.orderId
    // const singleOrder = await Orders.findByPk(orderId, {
    //   include: Product,
    //   // model: OrdersProducts,
    //   // where: {productId: 1,},
    // })

    const singleOrder = await OrdersProducts.findOne({
      where: {
        productId: req.body.productId,
        orderId: orderId,
      },
    })

    // just search in ordersprocut and querry for orderId productID fool.

    console.log("singleORder: ", singleOrder)

    if (!singleOrder) {
      res.status(404).send("Order not found to update")
      return
    }

    console.log("=================")
    console.log("prod ID to update: ", req.body.productId)
    console.log("quantity to update: ", req.body.quantity)
    // console.log(singleOrder.products)
    // console.log(singleOrder)

    // later, req.body is going to have "newQuantity"

    // res.status(200).send(singleOrder.update(req.body))
    singleOrder.update({ quantity: req.body.quantity })
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
