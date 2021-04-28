//basic route configuration 
const express = require('express');
  
const router = express.Router();

//extract multer configuration
require('../../config/cloudinary');
const upload = require('../../middlewares/multer');

const PetLostController = require('../../controllers/mascot/PetLostController')

//test endpoint
router.get('/lost/test', (req, res, next) => {
  res.status(200).json('adoption endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF LOST POSTS
router.get('/losts/list', PetLostController.getAllLost)

router.get('/losts/list/:id', PetLostController.getLostById)

router.get('/losts/list/specie/:petSpecie', PetLostController.getLostBySpecie)

router.get('/losts/list/sex/:petSex', PetLostController.getLostBySex)

router.get('/losts/list/city/:petCity', PetLostController.getLostByCity)

router.get('/losts/list/size/:petSize', PetLostController.getLostBySize)

router.put('/losts/editLost/:id', PetLostController.updateLost)

router.delete('/losts/deleteLost/:id', PetLostController.deleteLost)

router.post('/losts/createLost', upload.array('petPictures', 10), PetLostController.createLost)

//END
module.exports = router;