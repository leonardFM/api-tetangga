// controllers/bansosController.js
const banner = require('../models/bansosModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString');
const formatResponse = require('../utils/responseFormatter');


const getAllBansos = async (req, res) => {
    try {
        const bansos = await banner.getAllBansos();
        const bansosWithStringIds = convertBigIntToString(bansos);
        res.status(200).json(formatResponse({ data: bansosWithStringIds }));
    } catch (error) {
        console.error('Error fetching banners:', error);
        res.status(500).json(formatResponse({ 
            status: 500, 
            message: 'Unable to fetch banners at the moment.', 
            error: error.message 
        }));
    }
};

const getBansosById = async (req, res) => {
    const { id } = req.params;
    try {
        const bannerDetails = await banner.getBansosById(id);
        const bannerWithStringIds = convertBigIntToString(bannerDetails);
        res.status(200).json(formatResponse({ data: bannerWithStringIds }));
    } catch (error) {
        console.error(`Error fetching banner with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
            status: 500, 
            message: `Unable to fetch banner details for id ${id}.`, 
            error: error.message 
        }));
    }
};

module.exports = {
    getAllBansos,
    getBansosById
};