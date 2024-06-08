const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Data = require('../models/Data');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const importData = async () => {
  try {
    await Data.deleteMany();
    const jsonData = JSON.parse(fs.readFileSync('data/jsondata.json', 'utf-8'));
    await Data.insertMany(jsonData);
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

importData();
