const path = require("path");
const router = require("express").Router();
const productRoutes = require("./products.js");

// Product Routes
router.use("/products", productRoutes);


// Support Screen
router.use("/support", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/support.html"))
  console.log("Support route hit")
});






// Home screen
router.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"))
  console.log("Home route hit")
});

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../views/index.html"));
// });

module.exports = router;