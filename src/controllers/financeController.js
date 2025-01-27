const service = require('../models/financeModel');
const finance_total = require('../models/financeTotalModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString');
const formatResponse = require('../utils/responseFormatter');



const getAllFinanceByMonth = async (req, res) => {
    try {
        const { month } = req.params; // Mengambil parameter dari URL
        const monthNumber = parseInt(month, 10); // Konversi ke angka desimal

        if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
            return res.status(400).json({ error: 'Invalid month parameter. Please provide a valid month (1-12).' });
        }

        const finances = await service.getAllFinanceByMonth(monthNumber);
        const financesWithStringIds = convertBigIntToString(finances);

        res.status(200).json({
            status: 200,
            message: "Success",
            data: financesWithStringIds
        });
    } catch (error) {
        console.error('Error fetching finances:', error);
        res.status(500).json({ error: 'Unable to fetch finances at the moment.' });
    }
};



const getAllFinanceByUserId = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid month parameter.' });
        }

        const finances = await service.getAllFinanceByUserId(id);
        const financesWithStringIds = convertBigIntToString(finances);

        res.json(financesWithStringIds);
    } catch (error) {
        console.error('Error fetching finances:', error);
        res.status(500).json({ error: 'Unable to fetch finances at the moment.' });
    }
};

const getFinanceRecordByMonth = async (req, res) => {
    try {
        const { month } = req.params;

        if (isNaN(month)) {
            return res.status(400).json({ error: 'Invalid month parameter.' });
        }    

        const finances = await service.getFinanceRecordByMonth(month);
        const financesWithStringIds = convertBigIntToString(finances);
        res.status(200).json(formatResponse({ data: financesWithStringIds }));


    } catch (error) {
        console.error('Error fetching finances:', error);
        res.status(500).json({ error: 'Unable to fetch finances at the moment.' });
    }
};

const getFinanceTotal = async (req, res) => {    
    try {
        const finances = await finance_total.getAllFinanceTotal();
        const financesWithStringIds = convertBigIntToString(finances);
        res.status(200).json(formatResponse({ data: financesWithStringIds }));
    } catch (error) {
        console.error('Error fetching finances:', error);
        res.status(500).json({ error: 'Unable to fetch finances total at the moment.' });
    }
}

module.exports = {
    getAllFinanceByMonth,
    getAllFinanceByUserId,
    getFinanceRecordByMonth,
    getFinanceTotal
};
