const express = require('express')
const mongoose = require('mongoose')
const studentRoute = require('./routes/studentRoute')
const app = express();
require("dotenv").config();



// middlewares
app.use(express.json());
app.use('/student' , studentRoute)


// connect with mongodb 
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo Connection Built")
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

  export default app;