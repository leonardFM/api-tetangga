const service = require('../models/financeModel');
const { convertBigIntToString } = require('../utils/convertBigIntToString ');


const getAllFinanceByMonth = async (req, res) => {
    try {
        const { month } = req.query;
        const monthNumber = parseInt(month, 10);

        if (isNaN(monthNumber)) {
            return res.status(400).json({ error: 'Invalid month parameter.' });
        }

        const finances = await service.getAllFinanceByMonth(monthNumber);
        const financesWithStringIds = convertBigIntToString(finances);

        res.json(financesWithStringIds);
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

        res.json(financesWithStringIds);
    } catch (error) {
        console.error('Error fetching finances:', error);
        res.status(500).json({ error: 'Unable to fetch finances at the moment.' });
    }
};

module.exports = {
    getAllFinanceByMonth,
    getAllFinanceByUserId,
    getFinanceRecordByMonth
};
