const path = require("path");
const router = require("express").Router();
const productRoutes = require("./products.js");

// Product Routes
router.use("/products", productRoutes);

//Home screen
router.use("/", function(req, res){
  res.sendFile(path.join(__dirname, "../views/index.html"))
});

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../views/index.html"));
// });

module.exports = router;
