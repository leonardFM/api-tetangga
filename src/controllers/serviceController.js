const service = require('../models/serviceModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString ');


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


const getServiceRumahById = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceDetails = await service.getServiceRumahById(id);
        const servicesWithStringIds = convertBigIntToString(serviceDetails);
        res.json(servicesWithStringIds);
    } catch (error) {
        console.error(`Error fetching service with id ${id}:`, error);
        res.status(500).json({ error: 'Unable to fetch service details.' });
    }
};  

const getServiceKendaraanById = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceDetails = await service.getServiceKendaraanById(id);
        const servicesWithStringIds = convertBigIntToString(serviceDetails);
        res.json(servicesWithStringIds);
    } catch (error) {
        console.error(`Error fetching service with id ${id}:`, error);
        res.status(500).json({ error: 'Unable to fetch service details.' });
    }
};

const getServiceBansosById = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceDetails = await service.getServiceKendaraanById(id);
        const servicesWithStringIds = convertBigIntToString(serviceDetails);
        res.json(servicesWithStringIds);
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
    getAllServicesBansos,
    getServiceBansosById
};
