const router = require("express").Router();
const path = require("path");

var test = "product.html"
// Matches with "/products"
router.route("/").get(function (req, res) {
  res.sendFile(path.join(__dirname, "../views/" + test))
  console.log("Products route hit")
});

module.exports = router;