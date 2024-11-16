const cors = require('cors');

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || origin === 'http://localhost:3000') {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'],
    credentials: true // if using cookies or auth headers
};

module.exports = cors(corsOptions);
