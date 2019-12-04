const router = require("express").Router();
const productList = require("../../data/products");

// Matches with "/api/products"
router.route("/").get(function (req, res) {
  res.json(productList)
});

router.route("/:id").get(function (req, res) {
  for(let i=0; i< productList.length; i++){
    if(req.params === productList[i].productTitle){
      res.json(products[i]);
    }
  }
});


module.exports = router;