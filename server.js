const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/users', require('./lib/routers/userRouter'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


// database connection
mongoose.connect('mongodb://localhost:27017/board',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("Connection to mongoDB");
});





