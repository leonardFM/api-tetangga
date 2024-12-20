const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const serviceRoutes = require('./src/routes/serviceRourtes');
const authRoutes = require('./src/routes/authRoutes');
const financeRoutes = require('./src/routes/financeRoutes');
const umkmRoutes = require('./src/routes/umkmRoutes');
const accessValidation = require('./src/middlewares/accessValidation');
const corsConfig = require('./src/middlewares/corsConfig');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(corsConfig);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API-Tetangga' });
});

app.use('/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api', serviceRoutes);
app.use('/api', financeRoutes);
app.use('/api', umkmRoutes);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
