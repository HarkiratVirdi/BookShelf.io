const express = require('express');
const app = express();
const healthRoute = require('./routes/health');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware.js');
const bodyParser = require('body-parser');
const cors = require('cors');

//logs
const logger = require('./logger');
const pino = require('pino-http')({ logger });


//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(pino);
app.use(cors());

//routes
app.use('/', healthRoute);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
