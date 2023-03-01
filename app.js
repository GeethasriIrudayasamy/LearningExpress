const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin-routes");
const shopRoutes = require("./routes/shop-routes");
const path = require("path");
const errorHandler = require("./controllers/shop");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use(errorHandler.error404);

app.listen(4000);
