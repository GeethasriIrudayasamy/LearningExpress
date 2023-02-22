const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<html><h2>Welcome Page</h2></html>");
});

module.exports = router;
