const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin-routes");
const shopRoutes = require("./routes/shop-routes");
const path = require("path");
const rootDir = require("./utils/path");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(4000);
