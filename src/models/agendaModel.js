// models/agendaModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Agenda = {
    getAllAgendas: async () => {
        try {
            const agendas = await prisma.agendas.findMany();
            return agendas;
        } catch (error) {
            console.error('Error fetching agendas:', error);
            throw new Error('Unable to fetch agendas at the moment.');
        }
    },

    getAgendaById: async (id) => {
        try {
            const agenda = await prisma.agendas.findUnique({
                where: { id: BigInt(id) }
            });

            if (!agenda) {
                throw new Error(`Agenda with id ${id} not found`);
            }

            return agenda;
        } catch (error) {
            console.error(`Error fetching agenda with id ${id}:`, error);
            throw new Error('Unable to fetch agenda details.');
        }
    }
};

module.exports = Agenda;
