const User = require('../models/userModel');  // Mengimpor model User

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await User.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getFamily = async (req, res) => {
  try {
    const users = await User.getFamily();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getFamily,
  getAllUsers,
  getUserById,
};


