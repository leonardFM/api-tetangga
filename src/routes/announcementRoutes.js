const express = require('express');
const announcementController = require('../controllers/announcementController');
const router = express.Router();

router.get('/announcements', announcementController.getAllAnnouncements);
router.get('/announcement/:slug', announcementController.getAnnouncementBySlug);
router.get('/announcement/id/:id', announcementController.getAnnouncementById);
router.post('/announcement', announcementController.createAnnouncement);
router.put('/announcement/:id', announcementController.updateAnnouncement);
router.delete('/announcement/:id', announcementController.deleteAnnouncement);

module.exports = router;
