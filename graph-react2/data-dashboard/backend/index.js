const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataRoutes = require('./routes/data');

const app = express();

mongoose.connect('mongodb://localhost:27017/DATA', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

app.use('/api/data', dataRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
