// routes/agendaRoutes.js
const express = require('express');
const agendaController = require('../controllers/agendaController');
const router = express.Router();

router.get('/agendas', agendaController.getAllAgendas);
router.get('/agenda/:id', agendaController.getAgendaById);

module.exports = router;
