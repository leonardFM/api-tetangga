const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const login = async (email, password) => {
  try {
    const user = await prisma.users.findUnique({
        where: { email: email },
      });
      

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    const payload = {
      id: user.id.toString(),
      name: user.name,
      role: user.role,
      nik: user.nik,
      parent_id: user.parent_id,
      status: user.status,
      alamat: user.alamat,
      phone: user.phone,
      nik: user.nik,
      tanggal_lahir: user.tanggal_lahir,
      jenis_kelamin: user.jenis_kelamin,
      tanggal_masuk: user.tanggal_masuk,
      aktif: user.aktif,
      email: user.email,
    };

    const secret = process.env.JWT_SECRET;
    const expired = 60 * 60 * 2; // 2 hours 
    const token = jwt.sign(payload, secret, { expiresIn: expired });

    return {
      message: 'Login successful',
      token: token,
    };
  } catch (error) {
    console.error('Error during login:', error);
    if (error.message === 'Invalid email or password') {
      throw new Error('Invalid email or password');
    }
    throw new Error('An unexpected error occurred during login.');
  }
};

module.exports = {
  login,
};
