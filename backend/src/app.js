// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bfhlRoutes = require('./routes/bfhl');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// app.use(cores(
//   {
//     origin:["testdeploy-uc82.vercel.app/"],
//     method: ["POST","GET"],
//     credentials: true
//   }
//   ));

// app.use('/bfhl', bfhlRoutes);

// module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhl');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(cors({
  origin: ["https://testdeploy-uc82.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));

app.use('/bfhl', bfhlRoutes);

module.exports = app;
