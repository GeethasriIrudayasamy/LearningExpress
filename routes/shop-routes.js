const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

router.get("/contact-us", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

router.post("/success", (req, res, next) => {
    res.send("<h2>Form successfully filled</h2>");
});

module.exports = router;
