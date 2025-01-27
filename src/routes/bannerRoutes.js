// routes/bannerRoutes.js
const express = require('express');
const bannerController = require('../controllers/bannerController');
const router = express.Router();

router.get('/banners', bannerController.getAllBanners);
router.get('/banner/:id', bannerController.getBannerById);

module.exports = router;
