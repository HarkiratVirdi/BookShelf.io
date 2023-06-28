const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json("Fetching all products");
});

router.get("/:id", (req, res) => {
    res.json("Fetching single product");
});

module.exports = router;