const path = require("path");
const rootDir = require("../utils/path");

exports.addProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.products = (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
};
