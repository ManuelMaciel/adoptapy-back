const mongoose = require('mongoose'); //Mongoose
require('dotenv').config({ path: '.env' }); //DotENV

const { DB_MONGO } = process.env;

const mongodb = async () => {

  try {
    await mongoose.connect(DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log(`the database is connected to ${DB_MONGO}`);
  } catch (error) {
    console.log(error);
    process.exit(1); //holds the app
  }

}

module.exports = mongodb;