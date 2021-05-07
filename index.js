// Dependencies Index

const express = require('express'); //Express
const app = express();
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config({ path: '.env' }); //DotENV

//  MongoDB/Mongoose configurations 
const mongodb = require('./config/mongodb');

// Enable express.json() and send data by url-encoded
app.use(express.json({ extended: true, limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' })); 
app.use(helmet());
app.use(cors());
//routes import
const adoptionRouter = require('./routes/mascot/PetAdoptionRoute');
const foundRouter = require('./routes/mascot/PetFoundRoute');
const lostRouter = require('./routes/mascot/PetLostRoute');

app.get('/api', (req, res) => res.json({
  status: 200,
  msg: 'API Its Working!'
}));

//adoption path
app.use('/api', adoptionRouter);
//found path
app.use('/api', foundRouter);
//lost path
app.use('/api', lostRouter);

const PORT = process.env.PORT || 3000;

//server initialization
app.listen(PORT, () => {
  mongodb();
  console.log(`Server is running on port ${PORT}.`);
});