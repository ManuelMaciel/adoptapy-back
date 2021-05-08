//basic route configuration 
const express = require('express');
const router = express.Router();
//extract multer configuration
require('../../config/cloudinary');
const upload = require('../../middlewares/multer');
// The controller
const PetAdoptionController = require('../../controllers/mascot/PetAdoptionController');
// Middleware
const { isAdmin } = require ('../../middlewares/auth');
//test endpoint
router.get('/adoptions/test', (req, res, next) => {
  res.status(200).json('adoption endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF ADOPTION POST
// GET REQUEST
router.get('/adoptions/list', PetAdoptionController.getAllAdoption)
router.get('/adoptions/list/:id', PetAdoptionController.getAdoptionById)
router.get('/adoptions/list/specie/:petSpecie', PetAdoptionController.getAdoptionBySpecie)
router.get('/adoptions/list/sex/:petSex', PetAdoptionController.getAdoptionBySex)
router.get('/adoptions/list/city/:petCity', PetAdoptionController.getAdoptionByCity)
router.get('/adoptions/list/size/:petSize', PetAdoptionController.getAdoptionBySize)
// POST REQUEST
router.post('/adoptions/createAdoption', upload.array('petPictures', 2), PetAdoptionController.createAdoption)
// PUT REQUEST
router.put('/adoptions/editAdoption/:id', isAdmin, PetAdoptionController.updateAdoption)
// DELETE REQUEST
router.delete('/adoptions/deleteAdoption/:id', isAdmin, PetAdoptionController.deleteAdoption)
//END

module.exports = router;