const express = require('express');
const connectDB = require('./config/db.js');
const gymRoutes = require('./routes/gymRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const auth = require('./routes/auth.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors({origin:'http://localhost:5173'}))
app.use(express.json());

app.use('/api/gyms', gymRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', auth);

app.get('/', (req, res) => {
    res.send('Server test');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));