const express = require('express');
const { login } = require('./service/auth'); // Import the login function from auth.js
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await login(email, password);
    res.json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
