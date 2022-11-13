const router = require("express").Router();
const {
  models: { Product },
} = require("../db");

// GET /api/products

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (err) {
    console.log("Error in GET ALL", err);
  }
});

// GET /api/products/:id

router.get("/:id", async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    res.send(singleProduct);
  } catch (err) {
    console.log("Error in GET SINGLE", err);
  }
});

// POST /api/products

router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send(newProduct);
  } catch (err) {
    console.log("Error in POST", err);
  }
});

// PUT /api/products/:id

router.put("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await Product
      .findByPk(req.params.id)
      .then((product) => product.update(req.body));
    res.send(updatedProduct);
  } catch (err) {
    console.log("Error in PUT", err);
  }
});

// DELETE /api/products/:id

router.delete("/:id", async (req, res, next) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    console.log("Error in DELETE", err);
  }
});


module.exports = router;
