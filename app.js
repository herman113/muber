const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
var cors = require('cors');

const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}

app.use(cors());
app.use(bodyParser.json());
routes(app);


app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3050/api/drivers");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   next();
// });

// app.all('', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");


// import proxy from 'http-proxy-middleware'
// app.use('/api/**', proxy({ target: "http://localhost:8080" }));