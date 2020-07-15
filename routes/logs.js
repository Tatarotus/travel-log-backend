const { Router } = require('express');
const Log = require('../models/logEntry');

const router = Router();

router.get('/logs/', async (req, res, next) => {
  try {
    const response = await Log.find();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.post('/logs/', async (req, res, next) => {
  const log = new Log(req.body);
  try {
    const response = await log.save();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
