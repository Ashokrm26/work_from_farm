const express = require('express');
const router = express.Router();
const Farm = require('../models/Farm');

// Farm search route
router.get('/', async (req, res) => {
  const { location, amenities, price } = req.query;

  const filters = {};
  if (location) filters.location = { $regex: location, $options: 'i' };
  if (amenities) filters.amenities = { $regex: amenities, $options: 'i' };
  if (price) filters.price = { $lte: price };

  try {
    const farms = await Farm.find(filters);
    res.json(farms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching farms', error });
  }
});

module.exports = router;
