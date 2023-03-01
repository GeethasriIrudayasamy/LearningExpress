const path=require("path")
const rootDir = require("../utils/path");


exports.contactus = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.getShop = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));
};

exports.successPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "success.html"));
};

exports.error404 = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
};
