import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.json("Fetching single user");
});

router.get("/:id", (req, res) => {
    res.json("Fetching all users");
});

export default router;