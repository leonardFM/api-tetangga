const announcement = require('../models/announcementModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString');
const formatResponse = require('../utils/responseFormatter');

const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await announcement.getAllAnnouncements();
        const announcementsWithStringIds = convertBigIntToString(announcements);
        res.status(200).json(formatResponse({ data: announcementsWithStringIds }));
    } catch (error) {
        console.error('Error fetching announcements:', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch announcements at the moment.', 
          error: error.message 
        }));
    }
};

const getAnnouncementBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const announcementDetails = await announcement.getAnnouncementBySlug(slug);
        const announcementsWithStringIds = convertBigIntToString(announcementDetails);
        res.status(200).json(formatResponse({ data: announcementsWithStringIds }));
    } catch (error) {
        console.error(`Error fetching announcement with slug ${slug}:`, error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: `Unable to fetch announcement details for slug ${slug}.`, 
          error: error.message 
        }));
    }
};

const getAnnouncementById = async (req, res) => {
    const { id } = req.params;
    try {
        const announcementDetails = await announcement.getAnnouncementById(id);
        const announcementsWithStringIds = convertBigIntToString(announcementDetails);
        res.status(200).json(formatResponse({ data: announcementsWithStringIds }));
    } catch (error) {
        console.error(`Error fetching announcement with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: `Unable to fetch announcement details for id ${id}.`, 
          error: error.message 
        }));
    }
};

const createAnnouncement = async (req, res) => {
    const { title, slug, description, tanggal } = req.body;
    try {
        const newAnnouncement = await announcement.createAnnouncement(title, slug, description, tanggal);
        const announcementWithStringIds = convertBigIntToString(newAnnouncement);
        res.status(201).json(formatResponse({ data: announcementWithStringIds }));
    } catch (error) {
        console.error('Error creating announcement:', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to create announcement at the moment.', 
          error: error.message 
        }));
    }
};

const updateAnnouncement = async (req, res) => {
    const { id } = req.params;
    const { title, slug, description, tanggal } = req.body;
    try {
        const updatedAnnouncement = await announcement.updateAnnouncement(id, title, slug, description, tanggal);
        const announcementWithStringIds = convertBigIntToString(updatedAnnouncement);
        res.status(200).json(formatResponse({ data: announcementWithStringIds }));
    } catch (error) {
        console.error(`Error updating announcement with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: `Unable to update announcement with id ${id}.`, 
          error: error.message 
        }));
    }
};

const deleteAnnouncement = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await announcement.deleteAnnouncement(id);
        res.status(200).json(formatResponse({ data: result }));
    } catch (error) {
        console.error(`Error deleting announcement with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: `Unable to delete announcement with id ${id}.`, 
          error: error.message 
        }));
    }
};

module.exports = {
    getAllAnnouncements,
    getAnnouncementBySlug,
    getAnnouncementById,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement
};
