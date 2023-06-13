import express from "express";
const router = express.Router();
import { register } from '../controllers/userController.js';
import bodyParser from "body-parser";

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/register', register)

router.get("/", (req, res) => {
    res.json("Fetching single user");
});

router.get("/:id", (req, res) => {
    res.json("Fetching all users");
});

export default router;