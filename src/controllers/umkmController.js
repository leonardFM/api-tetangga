const umkm = require('../models/umkmModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString');
const formatResponse = require('../utils/responseFormatter');

const getAllUmkm = async (req, res) => {
    try {
        const umkms = await umkm.getAllUmkm();
        const umkmsWithStringIds = convertBigIntToString(umkms);
        res.status(200).json(formatResponse({ data: umkmsWithStringIds }));
    } catch (error) {
        console.error('Error fetching umkms:', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch UMKMs at the moment.', 
          error: error.message 
        }));
    }
};

const getAllMenu = async (req, res) => {
    try {
        const menus = await umkm.getAllMenu();
        const menusWithStringIds = convertBigIntToString(menus);
        res.status(200).json(formatResponse({ data: menusWithStringIds }));
    } catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch menus at the moment.', 
          error: error.message 
        }));
    }
};

const getUmkmById = async (req, res) => {
    const { id } = req.params;
    try {
        const umkmDetails = await umkm.getUmkmById(id);
        const umkmsWithStringIds = convertBigIntToString(umkmDetails);
        res.status(200).json(formatResponse({ data: umkmsWithStringIds }));
    } catch (error) {
        console.error(`Error fetching umkm with id ${id}:`, error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: `Unable to fetch UMKM details for id ${id}.`, 
          error: error.message 
        }));
    }
};

const getAllUmkmByCategoryJasa = async (req, res) => {
    try {
        const umkms = await umkm.getAllUmkmByCategoryJasa();
        const umkmsWithStringIds = convertBigIntToString(umkms);
        res.status(200).json(formatResponse({ data: umkmsWithStringIds }));
    } catch (error) {
        console.error('Error fetching UMKMs by category (Jasa):', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch UMKMs by category (Jasa) at the moment.', 
          error: error.message 
        }));
    }
};

const getAllUmkmByCategoryMakanan = async (req, res) => {
    try {
        const umkms = await umkm.getAllUmkmByCategoryMakanan();
        const umkmsWithStringIds = convertBigIntToString(umkms);
        res.status(200).json(formatResponse({ data: umkmsWithStringIds }));
    } catch (error) {
        console.error('Error fetching UMKMs by category (Makanan):', error);
        res.status(500).json(formatResponse({ 
          status: 500, 
          message: 'Unable to fetch UMKMs by category (Makanan) at the moment.', 
          error: error.message 
        }));
    }
};

module.exports = {
    getAllUmkm,
    getAllMenu,
    getUmkmById,
    getAllUmkmByCategoryJasa,
    getAllUmkmByCategoryMakanan
};
