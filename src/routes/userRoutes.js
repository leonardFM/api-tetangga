const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/user/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.get('/users/family', userController.getFamily);
router.get('/users/statistic', userController.getStatistic);

module.exports = router;
