const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin-routes");
const shopRoutes = require("./routes/shop-routes");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>The Page you're looking for is NOT FOUND</h1>");
});

app.listen(4000);
