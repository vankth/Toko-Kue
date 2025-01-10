const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Import Router
const apiRouter = require('./api');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Definisikan Router pada path "/api"
app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
