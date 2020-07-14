const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const logs = require('./api/logs');
const middlewares = require('./middlewares');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1337;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({ origin: process.env.CROSS_ORIGIN }));

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

app.use(logs);

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);
