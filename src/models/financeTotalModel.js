const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FinanceTotal = {
    getAllFinanceTotal: async () => {
        try {
            const financeTotal = await prisma.finance_totals.findMany();
            return financeTotal;
        } catch (error) {
            console.error('Error fetching finance total:', error);
            throw new Error('Unable to fetch finance total at the moment.');
        }
    }
}

module.exports = FinanceTotal;