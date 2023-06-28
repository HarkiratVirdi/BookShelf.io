// Get express app instance
const app = require('./app');
const ConnectDB = require('./config/db.js');

require('dotenv').config();

ConnectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`));
