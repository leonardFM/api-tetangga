// routes/eventRoutes.js
const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

router.get('/events', eventController.getAllEvents);
router.get('/event/:id', eventController.getEventById);

module.exports = router;
