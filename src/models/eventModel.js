// models/eventModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Event = {
    getAllEvents: async () => {
        try {
            const events = await prisma.events.findMany();
            return events;
        } catch (error) {
            console.error('Error fetching events:', error);
            throw new Error('Unable to fetch events at the moment.');
        }
    },

    getEventById: async (id) => {
        try {
            const event = await prisma.events.findUnique({
                where: { id: BigInt(id) }
            });

            if (!event) {
                throw new Error(`Event with id ${id} not found`);
            }

            return event;
        } catch (error) {
            console.error(`Error fetching event with id ${id}:`, error);
            throw new Error('Unable to fetch event details.');
        }
    }
};

module.exports = Event;
