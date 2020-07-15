const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const getShortenUrlRoute = require('./routes/getshortenurl');
const shortUrlRoute = require('./routes/url');

const app = express();

//connect to database
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

//define routes
app.use('/', getShortenUrlRoute);
app.use('/shorturl', shortUrlRoute);

app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT}`));
