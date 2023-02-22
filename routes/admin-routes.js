const express = require("express");
const router = express.Router();

router.use("/add-product", (req, res, next) => {
    res.send(
        '<html><form action="/product" method="POST"><label>Product Name:</label><input type="text" name="product"/><br/><br/><label>Size:</label><input type="text" name="size"/><br/><br/><button type="submit">Add Product</button></form></html>'
    );
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
