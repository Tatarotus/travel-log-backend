const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const logs = require('./routes/logs');
const middlewares = require('./middlewares');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1337;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`App is running on port: ${PORT}`);
    });
  });

app.use(morgan('common'));
app.use(helmet());
app.use(cors({ origin: process.env.CROSS_ORIGIN }));
app.use(express.json());
app.use('/api/', logs);

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);
