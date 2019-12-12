const path = require("path");
const router = require("express").Router();
const productRoutes = require("./products.js");

// API Routes
router.use("/products", productRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;
