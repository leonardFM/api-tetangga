// controllers/agendaController.js
const agenda = require('../models/agendaModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString');
const formatResponse = require('../utils/responseFormatter');

const getAllAgendas = async (req, res) => {
    try {
        const agendas = await agenda.getAllAgendas();
        const agendasWithStringIds = convertBigIntToString(agendas);
        res.status(200).json(formatResponse({ data: agendasWithStringIds }));
    } catch (error) {
        console.error('Error fetching agendas:', error);
        res.status(500).json(formatResponse({ 
            status: 500, 
            message: 'Unable to fetch agendas at the moment.', 
            error: error.message 
        }));
    }
};

const getAgendaById = async (req, res) => {
    const { id } = req.params;
    try {
        const agendaDetails = await agenda.getAgendaById(id);
        const agendaWithStringIds = convertBigIntToString(agendaDetails);
        res.status(200).json(formatResponse({ data: agendaWithStringIds }));
    } catch (error) {
        console.error(`Error fetching agenda with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
            status: 500, 
            message: `Unable to fetch agenda details for id ${id}.`, 
            error: error.message 
        }));
    }
};

module.exports = {
    getAllAgendas,
    getAgendaById,
};
