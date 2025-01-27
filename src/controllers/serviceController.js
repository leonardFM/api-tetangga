const service = require('../models/serviceModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString');
const formatResponse = require('../utils/responseFormatter');

const getAllServicesRumah = async (req, res) => {
    try {
        const services = await service.getAllServicesRumah();
        const servicesWithStringIds = convertBigIntToString(services);
        res.status(200).json(formatResponse({ data: servicesWithStringIds }));
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch services at the moment.', 
          error: error.message 
        }));
    }
};

const getAllServicesKendaraan = async (req, res) => {
    try {
        const services = await service.getAllServicesKendaraan();
        const servicesWithStringIds = convertBigIntToString(services);
        res.status(200).json(formatResponse({ data: servicesWithStringIds }));
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch services at the moment.', 
          error: error.message 
        }));
    }
};

const getAllServicesBansos = async (req, res) => {
    try {
        const services = await service.getAllServicesBansos();
        const servicesWithStringIds = convertBigIntToString(services);
        res.status(200).json(formatResponse({ data: servicesWithStringIds }));
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch services at the moment.', 
          error: error.message 
        }));
    }
};

const getServiceRumahById = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceDetails = await service.getServiceRumahById(id);
        const servicesWithStringIds = convertBigIntToString(serviceDetails);
        res.status(200).json(formatResponse({ data: servicesWithStringIds }));
    } catch (error) {
        console.error(`Error fetching service with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch service details.', 
          error: error.message 
        }));
    }
};  

const getServiceKendaraanById = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceDetails = await service.getServiceKendaraanById(id);
        const servicesWithStringIds = convertBigIntToString(serviceDetails);
        res.status(200).json(formatResponse({ data: servicesWithStringIds }));
    } catch (error) {
        console.error(`Error fetching service with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch service details.', 
          error: error.message 
        }));
    }
};

const getServiceBansosById = async (req, res) => {
    const { id } = req.params;
    try {
        const serviceDetails = await service.getServiceKendaraanById(id);
        const servicesWithStringIds = convertBigIntToString(serviceDetails);
        res.status(200).json(formatResponse({ data: servicesWithStringIds }));
    } catch (error) {
        console.error(`Error fetching service with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch service details.', 
          error: error.message 
        }));
    }
};

module.exports = {
    getAllServicesRumah,
    getAllServicesKendaraan,
    getAllServicesBansos,
    getServiceRumahById,
    getServiceKendaraanById,
    getServiceBansosById
};
