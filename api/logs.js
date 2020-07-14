const { Router } = require('express');

const router = Router();

router.get('/api/logs', (req, res) => {
  res.json({ logs: 'logs' });
});

module.exports = router;
