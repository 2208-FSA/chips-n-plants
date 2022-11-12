"use strict"

const {
  db,
  models: { User, Product, Orders },
} = require("../server/db")

// Creating Users
const users = [
  {
    username: "cody",
    password: "123",
    firstName: "Cody",
    lastName: "Smith",
    email: "CodySmith123@gmail.com",
  },
  {
    username: "murphy",
    password: "123",
    firstName: "Murphy",
    lastName: "Jones",
    email: "MurphyJones123@gmail.com",
  },
]

const products = [
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Lime-2048.png",
    title: "Lime Tortilla Chips",
    description: "Yummy lime chips",
    price: 19.99,
    rating: 5,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    title: "Ranch Tortilla Chips",
    description: "Yummy ranch chips",
    price: 19.99,
    rating: 3,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    price: 19.99,
    rating: 4,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    price: 19.99,
    rating: 4,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    price: 19.99,
    rating: 4,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    price: 19.99,
    rating: 4,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    price: 19.99,
    rating: 4,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    price: 19.99,
    rating: 4,
  },
  {
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    price: 19.99,
    rating: 4,
  },
]

const orders = [
  {
    // productId: [1, 2, 4],
    userId: 1,
    billingAddress: "123 chip street",
    shippingAddress: "123 chip street",
    // productQuantity: 2,
    status: true,
    total: 3.46,
  },
  {
    // productId: [1, 8, 3],
    userId: 2,
    billingAddress: "123 chip street",
    shippingAddress: "123 chip street",
    // productQuantity: 6,
    status: true,
    total: 45.98,
  },
  {
    // productId: [4, 8, 2],
    userId: 1,
    billingAddress: "123 chip street",
    shippingAddress: "123 chip street",
    // productQuantity: 15,
    status: true,
    total: 3000,
  },
]
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log("db synced!")
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)

  await Promise.all(
    users.map((user) => {
      return User.create(user)
    })
  )
  await Promise.all(
    products.map((product) => {
      return Product.create(product)
    })
  )
  await Promise.all(
    orders.map((order) => {
      return Orders.create(order)
    })
  )
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...")
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log("closing db connection")
    await db.close()
    console.log("db connection closed")
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
