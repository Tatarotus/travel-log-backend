const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 1337;

app.use(morgan('common'));
app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(PORT);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack:
      process.env.NODE_ENV === 'production' ? 'silence is golden' : error.stack,
  });
});
