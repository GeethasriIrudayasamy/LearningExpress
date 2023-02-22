const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
    res.send(
        '<html><form action="/product" method="POST"><label>Product Name:</label><input type="text" name="product"/><br/><br/><label>Size:</label><input type="text" name="size"/><br/><br/><button type="submit">Add Product</button></form></html>'
    );
});

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    res.send("<html><h1>Hello from Express!!!</h1></html>");
});

app.listen(4000);
