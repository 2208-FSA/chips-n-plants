const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username', 'email', 'firstName', 'lastName']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const newUser= await User.create(req.body);
    res.send(newUser);
  } catch (err) {
    console.log("Error in POST/User", err);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const oneUser = await User.findByPk(userId);
    res.send(oneUser);
  } catch (error) {
    console.log("Error in GET /api/users/id.js :(\n\n", error);
  }
});