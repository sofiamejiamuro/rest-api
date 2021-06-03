const { Router } = require('express');
const router = Router();

// routes
router.get('/', (req, res) => {
  const data = {
    "Sucursal" : "1",
    "telefono" : "1234567891",
    "cp" : "12345"
  }
  res.json(data)
});

module.exports = router;