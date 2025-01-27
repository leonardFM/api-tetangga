const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Bansos = {
    getAllBansos: async () => {
        try {
            const bansos = await prisma.bansos.findMany();
            return bansos;
        } catch (error) {
            console.error('Error fetching bansos:', error);
            throw new Error('Unable to fetch bansos at the moment.');
        }
    },

    getBansosById: async (id) => {
        try {
            const bansos = await prisma.bansos.findUnique({
                where: { id: BigInt(id) }
            });
            return bansos;
        } catch (error) {
            console.error(`Error fetching bansos with id ${id}:`, error);
            throw new Error('Unable to fetch bansos details.');
        }
    }   
}

module.exports = Bansos; 