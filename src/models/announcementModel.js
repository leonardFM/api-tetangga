const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Announcement = {
    getAllAnnouncements: async () => {
        try {
            const announcements = await prisma.announcements.findMany();
            return announcements;
        } catch (error) {
            console.error('Error fetching announcements:', error);
            throw new Error('Unable to fetch announcements at the moment.');
        }
    },

    getAnnouncementBySlug: async (slug) => {
        try {
            const announcement = await prisma.announcements.findUnique({
                where: { slug: slug },
            });

            if (!announcement) {
                throw new Error(`Announcement with slug ${slug} not found`);
            }

            return announcement;

        } catch (error) {
            console.error(`Error fetching announcement with slug ${slug}:`, error);
            throw new Error('Unable to fetch announcement details.');
        }
    },

    getAnnouncementById: async (id) => {
        try {
            const announcement = await prisma.announcements.findUnique({
                where: { id: BigInt(id) },
            });

            if (!announcement) {
                throw new Error(`Announcement with id ${id} not found`);
            }

            return announcement;

        } catch (error) {
            console.error(`Error fetching announcement with id ${id}:`, error);
            throw new Error('Unable to fetch announcement details.');
        }
    },

    createAnnouncement: async (title, slug, description, tanggal) => {
        try {
            const announcement = await prisma.announcements.create({
                data: {
                    title,
                    slug,
                    description,
                    tanggal,
                },
            });

            return announcement;
        } catch (error) {
            console.error('Error creating announcement:', error);
            throw new Error('Unable to create announcement.');
        }
    },

    updateAnnouncement: async (id, title, slug, description, tanggal) => {
        try {
            const updatedAnnouncement = await prisma.announcements.update({
                where: { id: BigInt(id) },
                data: {
                    title,
                    slug,
                    description,
                    tanggal,
                },
            });

            return updatedAnnouncement;
        } catch (error) {
            console.error(`Error updating announcement with id ${id}:`, error);
            throw new Error('Unable to update announcement.');
        }
    },

    deleteAnnouncement: async (id) => {
        try {
            await prisma.announcements.delete({
                where: { id: BigInt(id) },
            });

            return { message: `Announcement with id ${id} deleted successfully.` };
        } catch (error) {
            console.error(`Error deleting announcement with id ${id}:`, error);
            throw new Error('Unable to delete announcement.');
        }
    }
};

module.exports = Announcement;
