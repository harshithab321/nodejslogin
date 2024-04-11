const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 2000;

require('./connection').connect();
require('dotenv').config();
const FunctionLog = require('./controller');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your routes
app.post('/api/login', FunctionLog);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
