const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Umkm = {
    getAllUmkm: async () => {
        try {
            const umkms = await prisma.umkms.findMany();
            return umkms;
        } catch (error) {
            console.error('Error fetching umkms:', error);
            throw new Error('Unable to fetch umkms at the moment.');
        }
    },
    getAllUmkmByCategoryMakanan: async () => {
        try {
            const umkms = await prisma.umkms.findMany({
                where: {
                    kategori: 'MAKANAN',
                }
            });
            return umkms;
        } catch (error) {
            console.error('Error fetching umkms:', error);
            throw new Error('Unable to fetch umkms at the moment.');
        }
    },

    getAllUmkmByCategoryJasa: async () => {
        try {
            const umkms = await prisma.umkms.findMany({
                where: {
                    kategori: 'JASA',
                }
            });
            return umkms;
        } catch (error) {
            console.error('Error fetching umkms:', error);
            throw new Error('Unable to fetch umkms at the moment.');
        }
    },
    getUmkmById: async (id) => {
        try {
            const umkm = await prisma.umkms.findUnique({
                where: { id: BigInt(id) },
                include: {
                    menus: {
                        where: { umkm_id: BigInt(id) },
                    },
                },
            });
    
            if (!umkm) {
                throw new Error(`Umkm with id ${id} not found`);
            }

            const umkmWithCount = {
                ...umkm,
                totalMenus: umkm.menus.length,
            };
    
            return umkmWithCount;
    
        } catch (error) {
            console.error(`Error fetching umkm with id ${id}:`, error);
            throw new Error('Unable to fetch umkm details.');
        }
    }
    
};

module.exports = Umkm;