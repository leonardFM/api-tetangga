const express = require('express');
const financeController = require('../controllers/financeController');
const router = express.Router();

router.get('/finances', financeController.getAllFinanceByMonth);
router.get('/finances/user/:id', financeController.getAllFinanceByUserId);
router.get('/finances/record/:month', financeController.getFinanceRecordByMonth);

module.exports = router;
