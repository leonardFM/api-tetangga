const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const User = {
  getAllUsers: async () => {
    try {
      const users = await prisma.users.findMany();
      const usersWithStringIds = users.map(user => ({
        ...user,
        id: user.id.toString(),
      }));
      return usersWithStringIds;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Unable to fetch users at the moment.');
    }
  },

  getUserById: async (id) => {
    try {
      const user = await prisma.users.findUnique({
        where: { id: BigInt(id) },
      });
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      return { ...user, id: user.id.toString() };
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw new Error('Unable to fetch user details.');
    }
  },

  getFamily: async () => {
    try {
      const users = await prisma.users.findMany();
      const families = {};

      users.forEach((user) => {
        if (user.parent_id === null) {
          families[user.id] = {
            kepalaKeluarga: user.name,
            anggota: [], 
          };
        } else {
          if (families[user.parent_id]) {
            families[user.parent_id].anggota.push(user.name);
          }
        }
      });

      const familiesArray = Object.values(families).map(family => ({
        kepalaKeluarga: family.kepalaKeluarga,
        anggota: family.anggota.map(anggota => ({ name: anggota })) 
      }));

      return familiesArray;
    } catch (error) {
      console.error('Error fetching families:', error);
      throw new Error('Unable to fetch families at the moment.');
    }
  },
};

module.exports = User;
