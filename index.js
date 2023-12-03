const express = require('express')
const mongoose = require('mongoose')
const studentRoute = require('./routes/studentRoute')
const app = express();
require("dotenv").config();



// middlewares
app.use(express.json());
app.use('/students' , studentRoute);


const PORT = process.env.PORT || 4000;
// connect with mongodb 
mongoose.connect(process.env.MONGO_URL)
  .then(() => {

console.log("Mongo Connection Built")
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
  })
  .catch((error) => {
    console.log(error.message);
  });
