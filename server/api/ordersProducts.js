const router = require("express").Router()
const {
  models: { OrdersProducts },
} = require("../db")

router.get("/", async (req, res, next) => {
  try {
    const allorderProducts = await OrdersProducts.findAll()
    console.log(allorderProducts)

    res.send(allorderProducts)
  } catch (err) {
    console.log("Error in GET ALL", err)
  }
})

// router.get("/:id", async (req, res, next) => {
//   try {
//     let productId = req.params.id
//     const singleProduct = await Product.findByPk(productId)
//     res.send(singleProduct)
//   } catch (err) {
//     console.log("Error in GET /ID", err)
//   }
// })

// router.post("/", async (req, res, next) => {
//   try {
//     const newProduct = await Product.create(req.body)
//     res.send(newProduct)
//   } catch (err) {
//     console.log("Error in POST", err)
//   }
// })

module.exports = router
