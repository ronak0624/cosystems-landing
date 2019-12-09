const router = require("express").Router();
const productList = require("../../data/products");

// Matches with "/api/products"
router.route("/").get(function (req, res) {
  res.json(productList)
});

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  for(let i=0; i < productList.length; i++){
    if(id === productList[i].productTitle){
      res.json(productList[i]);
    }
  }
});

router.route("/preview/:id").get(function (req, res) {
  let id = req.params.id;
  for(let i=0; i < productList.length; i++){
    if(id === productList[i].productTitle){
      res.json(productList[i].preview);
    }
  }
});


module.exports = router;