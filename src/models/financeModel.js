const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Finance = {
    getAllFinanceByMonth: async (month) => {
        try {
            const finances = await prisma.iurans.findMany({
                where: {
                    bulan: month
                }
            });

            return finances;
        } catch (error) {
            console.error('Error fetching finances:', error);
            throw new Error('Unable to fetch finances at the moment.');
        }
    },

    getAllFinanceByUserId: async (user_id) => {
        try {
            const finances = await prisma.iurans.findMany({
                where: {
                    user_id: user_id
                }
            });

            return finances;
        } catch (error) {
            console.error('Error fetching finances:', error);
            throw new Error('Unable to fetch finances at the moment.');
        }
    },

    getFinanceRecordByMonth: async (month) => {
        try {
            const finances = await prisma.financial_records.findMany({
                where: {
                    bulan: month
                }
            });

            return finances;
        } catch (error) {
            console.error('Error fetching finances:', error);
            throw new Error('Unable to fetch finances at the moment.');
        }
    }
}

module.exports = Finance