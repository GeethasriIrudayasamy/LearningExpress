const express = require("express");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const adminRoutes = require("./routes/admin-routes");
const shopRoutes = require("./routes/shop-routes");
=======
>>>>>>> 969fd55b23907d44758fbaf85f848a07bcdd7508
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>The Page you're looking for is NOT FOUND</h1>");
=======
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
>>>>>>> 969fd55b23907d44758fbaf85f848a07bcdd7508
});

app.listen(4000);
