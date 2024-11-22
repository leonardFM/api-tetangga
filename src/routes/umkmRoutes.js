const express = require('express');
const umkmController = require('../controllers/umkmController');
const router = express.Router();

router.get('/umkms', umkmController.getAllUmkm);
router.get('/umkm/:id', umkmController.getUmkmById);
router.get('/umkms/jasa', umkmController.getAllUmkmByCategoryJasa);
router.get('/umkms/makanan', umkmController.getAllUmkmByCategoryMakanan);

module.exports = router;