// controllers/eventController.js
const event = require('../models/eventModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString');
const formatResponse = require('../utils/responseFormatter');

const getAllEvents = async (req, res) => {
    try {
        const events = await event.getAllEvents();
        const eventsWithStringIds = convertBigIntToString(events);
        res.status(200).json(formatResponse({ data: eventsWithStringIds }));
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json(formatResponse({ 
            status: 500, 
            message: 'Unable to fetch events at the moment.', 
            error: error.message 
        }));
    }
};

const getEventById = async (req, res) => {
    const { id } = req.params;
    try {
        const eventDetails = await event.getEventById(id);
        const eventWithStringIds = convertBigIntToString(eventDetails);
        res.status(200).json(formatResponse({ data: eventWithStringIds }));
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
            status: 500, 
            message: `Unable to fetch event details for id ${id}.`, 
            error: error.message 
        }));
    }
};

module.exports = {
    getAllEvents,
    getEventById,
};
