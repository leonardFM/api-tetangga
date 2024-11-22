const umkm = require('../models/umkmModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString ');

const getAllUmkm = async (req, res) => {
    try {
        const umkms = await umkm.getAllUmkm();
        const umkmsWithStringIds = convertBigIntToString(umkms);
        res.json(umkmsWithStringIds);
    } catch (error) {
        console.error('Error fetching umkms:', error);
        res.status(500).json({ error: 'Unable to fetch umkms at the moment.' });
    }
};

const getUmkmById = async (req, res) => {
    const { id } = req.params;
    try {
        const umkmDetails = await umkm.getUmkmById(id);
        const umkmsWithStringIds = convertBigIntToString(umkmDetails);
        res.json(umkmsWithStringIds);
    } catch (error) {
        console.error(`Error fetching umkm with id ${id}:`, error);
        res.status(500).json({ error: 'Unable to fetch umkm details.' });
    }
};  

const getAllUmkmByCategoryJasa = async (req, res) => {
    try {
        const umkms = await umkm.getAllUmkmByCategoryJasa();
        const umkmsWithStringIds = convertBigIntToString(umkms);
        res.json(umkmsWithStringIds);
    } catch (error) {
        console.error('Error fetching umkms:', error);
        res.status(500).json({ error: 'Unable to fetch umkms at the moment.' });
    }
};

const getAllUmkmByCategoryMakanan = async (req, res) => {
    try {
        const umkms = await umkm.getAllUmkmByCategoryMakanan();
        const umkmsWithStringIds = convertBigIntToString(umkms);
        res.json(umkmsWithStringIds);
    } catch (error) {
        console.error('Error fetching umkms:', error);
        res.status(500).json({ error: 'Unable to fetch umkms at the moment.' });
    }
};

module.exports = {
    getAllUmkm,
    getUmkmById,
    getAllUmkmByCategoryJasa,
    getAllUmkmByCategoryMakanan
};