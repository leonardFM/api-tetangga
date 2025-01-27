// routes/bannerRoutes.js
const express = require('express');
const bansosController = require('../controllers/bansosController');
const router = express.Router();

router.get('/bansos', bansosController.getAllBansos);
router.get('/bansos/:id', bansosController.getBansosById);

module.exports = router;