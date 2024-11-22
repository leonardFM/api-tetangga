const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Service = {
    getAllServicesRumah: async () => {
        try {
            const services_rumah = await prisma.service_rumahs.findMany({
                include: {
                    users: true, 
                },
            });

            return services_rumah;
        } catch (error) {
            console.error('Error fetching services:', error);
            throw new Error('Unable to fetch services at the moment.');
        }
    },

    getAllServicesKendaraan: async () => {
        try {
            const services_rumah = await prisma.service_vehicles.findMany({
                include: {
                    users: true, 
                },
            });
            return services_rumah;
        } catch (error) {
            console.error('Error fetching services:', error);
            throw new Error('Unable to fetch services at the moment.');
        }
    },

    getAllServicesBansos: async () => {
        try {
            const services_bansos = await prisma.service_bansos.findMany({
                include: {
                    users: true, 
                },
            });

            return services_bansos;
        } catch (error) {
            console.error('Error fetching services:', error);
            throw new Error('Unable to fetch services at the moment.');
        }
    },


    getServiceRumahById: async (id) => {
        try {
            const service = await prisma.service_rumahs.findUnique({
                where: { id: Number(id) }, 
                include: {
                    users: true, 
                },
            });

            if (!service) {
                throw new Error(`Service with id ${id} not found`);
            }
            return service;
        } catch (error) {                
            console.error(`Error fetching service with id ${id}:`, error);
            throw new Error('Unable to fetch service details.');
        }
    },

    getServiceKendaraanById: async (id) => {
        try {
            const service = await prisma.service_vehicles.findUnique({
                where: { id: Number(id) }, 
                include: {
                    users: true, 
                },
            });

            if (!service) {
                throw new Error(`Service with id ${id} not found`);
            }
            return service;
        } catch (error) {                
            console.error(`Error fetching service with id ${id}:`, error);
            throw new Error('Unable to fetch service details.');
        }
    },

    getServiceBansosById: async (id) => {
        try {
            const service = await prisma.service_bansos.findUnique({
                where: { id: Number(id) }, 
                include: {
                    users: true, 
                },
            });

            if (!service) {
                throw new Error(`Service with id ${id} not found`);
            }
            return service;
        } catch (error) {                
            console.error(`Error fetching service with id ${id}:`, error);
            throw new Error('Unable to fetch service details.');
        }
    },


};

module.exports = Service;
