const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Finance = {
    getAllFinanceByMonth: async (month) => {
        try {
            const currentYear = new Date().getFullYear();
            const finances = await prisma.iurans.findMany({
                where: {
                    bulan: month,
                    tahun: currentYear

                }
            });
    
            return finances;
        } catch (error) {
            console.error('Error fetching finances by month:', error);
            throw new Error('Unable to fetch finances at the moment.');
        }
    },

    getAllFinanceByUserId: async (user_id) => {
        try {
            const currentYear = new Date().getFullYear();
            const finances = await prisma.iurans.findMany({
                where: {
                    user_id: user_id,
                    tahun: currentYear

                },
                orderBy: {
                    bulan: 'desc',
                }
            });

            console.log(finances);
    
            return finances;
        } catch (error) {
            console.error('Error fetching finances:', error);
            throw new Error('Unable to fetch finances at the moment.');
        }
    },

    getFinanceRecordByMonth: async (month) => {
        try {
            const currentYear = new Date().getFullYear();
            const finances = await prisma.financial_records.findMany({
                where: {
                    bulan: month,
                    tahun: `${currentYear}`
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