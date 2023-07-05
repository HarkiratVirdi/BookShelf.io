const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/register', userController.register);

<<<<<<< HEAD:backend/routes/userRoutes.js
router.post('/login', userController.login)

router.get("/", (req, res) => {
    res.json("Fetching single user");
=======
router.get('/', (req, res) => {
  res.json('Fetching single user');
>>>>>>> 9036870f1c62ddc647e28b5cad675570fdde65f8:backend/src/routes/userRoutes.js
});

router.get('/:id', (req, res) => {
  res.json('Fetching all users');
});

module.exports = router;
