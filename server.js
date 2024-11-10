const express = require('express');
const connectDB = require('./config/db.js');
const gymRoutes = require('./routes/gymRoutes.js');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api/gyms', gymRoutes);

app.get('/', (req, res) => {
    res.send('Server test');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));