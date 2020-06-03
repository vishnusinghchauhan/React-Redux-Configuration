const express = require('express');
const app = express();

var api = require('./routes/api');
app.use('/api/', api);

app.listen(5000, () =>
  console.log('Express server is running on localhost:5000')
);