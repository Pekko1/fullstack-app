const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');

require("./config/database");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/home', homeRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
