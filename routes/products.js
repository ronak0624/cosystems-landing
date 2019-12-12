const router = require("express").Router();
const path = require("path");

// Matches with "/api/products"
router.route("/").get(function (req, res) {
  res.sendFile(path.join(__dirname, "../views/product.html"))
});

module.exports = router;