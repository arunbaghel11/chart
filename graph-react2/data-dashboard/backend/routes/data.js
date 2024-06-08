const express = require('express');
const Data = require('../models/Data');

const router = express.Router();

router.get('/', async (req, res) => {
  const { end_year, topics, sector, region, pestle, source, swot, country, city } = req.query;

  let filters = {};

  if (end_year) filters.end_year = end_year;
  if (topics) filters.topics = { $in: topics.split(',') };
  if (sector) filters.sector = sector;
  if (region) filters.region = region;
  if (pestle) filters.pestle = pestle;
  if (source) filters.source = source;
  if (swot) filters.swot = swot;
  if (country) filters.country = country;
  if (city) filters.city = city;

  try {
    const data = await Data.find(filters);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
