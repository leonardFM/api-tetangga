// models/bannerModel.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Banner = {
    getAllBanners: async () => {
        try {
            const banners = await prisma.banners.findMany();
            return banners;
        } catch (error) {
            console.error('Error fetching banners:', error);
            throw new Error('Unable to fetch banners at the moment.');
        }
    },

    getBannerById: async (id) => {
        try {
            const banner = await prisma.banners.findUnique({
                where: { id: BigInt(id) }
            });

            if (!banner) {
                throw new Error(`Banner with id ${id} not found`);
            }

            return banner;
        } catch (error) {
            console.error(`Error fetching banner with id ${id}:`, error);
            throw new Error('Unable to fetch banner details.');
        }
    }
};

module.exports = Banner;
