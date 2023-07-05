const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const run = async () => {
  try{
    await db.authenticate();
    console.log("Connected to Database");

    await db.sync({force:true});
    console.log("Database synchronised")

  } catch(err){
    console.log(err);
  }
}

run();

app.use('/api/user', require('./routes/api/user'));

app.get('/', (req, res) => {
  res.send('hello');
});

const port = process.env.PORT||5000;

app.listen(
  port,
  console.log(`server is running on port ${port}`)
);
