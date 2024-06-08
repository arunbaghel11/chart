const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  end_year: Number,
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: [String],
  region: String,
  city: String,
  sector: String,
  pestle: String,
  source: String,
  swot: String
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
