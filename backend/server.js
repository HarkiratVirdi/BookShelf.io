const express = require('express');
const healthRoute = require('./routes/index');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const ConnectDB = require('./config/db.js');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware.js');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
ConnectDB();

app.use("/", healthRoute);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`)
);