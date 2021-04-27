//dependencies
const express = require('express'); //Express
const app = express();
require('dotenv').config({ path: '.env' }); //DotENV

//MongoDB/Mongoose configurations 
const mongodb = require('./config/mongodb');

//Enable express.json() and send data by url-encoded
app.use(express.json({ extended: true, limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' })); 

//routes import
const adoptionRouter = require('./routes/PetAdoptionRoute')
const foundRouter = require('./routes/PetFoundRoute')
const lostRouter = require('./routes/PetLostRoute')

app.get('/api', (req, res) => res.json({
  status: 200,
  message: 'API Its Working!'
}));

//crud adoption path
app.use('/api', adoptionRouter);
//crud found path
app.use('/api', foundRouter);
//crud lost path
app.use('/api', lostRouter);

const PORT = process.env.PORT || 3000;

//server initialization
app.listen(PORT, () => {
  mongodb();
  console.log(`Server is running on port ${PORT}.`);
});