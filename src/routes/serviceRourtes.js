const express = require('express');
const serviceController = require('../controllers/serviceController');
const router = express.Router();

router.get('/services/rumah', serviceController.getAllServicesRumah);
router.get('/services/bansos', serviceController.getAllServicesBansos);
router.get('/services/kendaraan', serviceController.getAllServicesKendaraan);
router.get('/services/rumah/:id', serviceController.getServiceRumahById);
router.get('/services/kendaraan/:id', serviceController.getServiceKendaraanById);

module.exports = router;