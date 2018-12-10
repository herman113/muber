// var cors = require('cors');
const app = require('./app');

// var corsOptions = {
//   origin: 'http://localhost:3050',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors());

// app.post('/api/users', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for only example.com.'})
// })

app.listen(3050, () => {
  console.log('Running on port 3050');
});
