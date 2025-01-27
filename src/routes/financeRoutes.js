const express = require('express');
const financeController = require('../controllers/financeController');
const router = express.Router();

router.get('/finances/month/:month', financeController.getAllFinanceByMonth);
router.get('/finances/user/:id', financeController.getAllFinanceByUserId);
router.get('/finances/record/:month', financeController.getFinanceRecordByMonth);
router.get('/finances/total', financeController.getFinanceTotal);

module.exports = router;
