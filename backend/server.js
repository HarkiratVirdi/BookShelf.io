const path = require("path");
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, ".env") });
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})