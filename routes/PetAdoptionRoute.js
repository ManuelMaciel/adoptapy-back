//basic route configuration 
const express = require('express');
  
const router = express.Router();

//extract multer configuration
require('../config/cloudinary');
const upload = require('../middlewares/multer');

const PetAdoptionController = require('../controllers/PetAdoptionController')

//test endpoint
router.get('/test', (req, res, next) => {
  res.status(200).json('adoption endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF ADOPTION
router.get('/adoptions/list', PetAdoptionController.getAllAdoption)

router.get('/adoptions/list/:id', PetAdoptionController.getAdoptionById)

router.get('/adoptions/list/specie/:petSpecie', PetAdoptionController.getAdoptionBySpecie)

router.get('/adoptions/list/sex/:petSex', PetAdoptionController.getAdoptionBySex)

router.get('/adoptions/list/location/:petLocation', PetAdoptionController.getAdoptionByLocation)

router.get('/adoptions/list/size/:petSize', PetAdoptionController.getAdoptionBySize)

router.put('/adoptions/editAdoption/:id', PetAdoptionController.updateAdoption)

router.delete('/adoptions/deleteAdoption/:id', PetAdoptionController.deleteAdoption)

router.post('/adoptions/createAdoption', upload.array('petPictures', 10), PetAdoptionController.createAdoption)

//END
module.exports = router;