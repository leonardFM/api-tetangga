const service = require('../models/serviceModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString ');


// Fetch all services for rumah
const getAllServicesRumah = async (req, res) => {
    try {
        const services = await service.getAllServicesRumah();
        const servicesWithStringIds = convertBigIntToString(services);
        res.json(servicesWithStringIds);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ error: 'Unable to fetch services at the moment.' });
    }
};
// Fetch all services for kendaraan
const getAllServicesKendaraan = async (req, res) => {
    try {
        const services = await service.getAllServicesKendaraan();
        const servicesWithStringIds = convertBigIntToString(services);
        res.json(servicesWithStringIds);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ error: 'controller' });
    }
};

const getAllServicesBansos = async (req, res) => {
    try {
        const services = await service.getAllServicesBansos();
        const servicesWithStringIds = convertBigIntToString(services);
        res.json(servicesWithStringIds);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ error: 'Unable to fetch services at the moment.' });
    }
};


// Fetch service for rumah by id
const getServiceRumahById = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceDetails = await service.getServiceRumahById(id);
        res.json(serviceDetails);
    } catch (error) {
        console.error(`Error fetching service with id ${id}:`, error);
        res.status(500).json({ error: 'Unable to fetch service details.' });
    }
};  

// Fetch service for kendaraan by id
const getServiceKendaraanById = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceDetails = await service.getServiceKendaraanById(id);
        res.json(serviceDetails);
    } catch (error) {
        console.error(`Error fetching service with id ${id}:`, error);
        res.status(500).json({ error: 'Unable to fetch service details.' });
    }
};

module.exports = {
    getAllServicesRumah,
    getAllServicesKendaraan,
    getServiceRumahById,
    getServiceKendaraanById,
    getAllServicesBansos
};
