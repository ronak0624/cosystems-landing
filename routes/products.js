const router = require("express").Router();
const path = require("path");

// Matches with "/products"
router.route("/").get(function (req, res) {
  res.sendFile(path.join(__dirname, "../views/product.html"))
  console.log("Products route hit")
});

module.exports = router;