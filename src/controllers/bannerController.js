// controllers/bannerController.js
const banner = require('../models/bannerModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString');
const formatResponse = require('../utils/responseFormatter');

const getAllBanners = async (req, res) => {
    try {
        const banners = await banner.getAllBanners();
        const bannersWithStringIds = convertBigIntToString(banners);
        res.status(200).json(formatResponse({ data: bannersWithStringIds }));
    } catch (error) {
        console.error('Error fetching banners:', error);
        res.status(500).json(formatResponse({ 
            status: 500, 
            message: 'Unable to fetch banners at the moment.', 
            error: error.message 
        }));
    }
};

const getBannerById = async (req, res) => {
    const { id } = req.params;
    try {
        const bannerDetails = await banner.getBannerById(id);
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
    getAllBanners,
    getBannerById,
};
