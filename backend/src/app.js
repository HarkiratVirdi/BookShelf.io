const express = require('express');
const app = express();
const healthRoute = require('./routes/health');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware.js');
const bodyParser = require('body-parser');

//middlewares
app.use(express.json());
app.use(bodyParser.json());

//routes
app.use('/', healthRoute);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
