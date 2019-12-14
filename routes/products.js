const router = require("express").Router();
const path = require("path");

// Matches with "/products"
router.route("/").get(function (req, res) {
  res.sendFile(path.join(__dirname, "../views/product.html"))
  console.log("Products route has been hit")
});
router.route("/:id").get(function (req, res) {
  let id = req.params.id
  id = encodeURI(id)
  res.sendFile(path.join(__dirname, "../views/products/" + id + ".html"))
  console.log(req.params.id +  " route has been hit")
});

module.exports = router;