//basic route configuration 
const express = require('express');
const router = express.Router();
//extract multer configuration
require('../../config/cloudinary');
const upload = require('../../middlewares/multer');
// The controller
const PetFoundController = require('../../controllers/mascot/PetFoundController');
// Middleware
const { isAdmin } = require ('../../middlewares/auth');
//test endpoint
router.get('/founds/test', (req, res, next) => {
  res.status(200).json('found endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF FOUND POST
router.post('/founds', upload.array('petPictures', 2), PetFoundController.createFound)

// GET REQUESTS
router.get('/founds', PetFoundController.getAllFound)
router.get('/founds/:id', PetFoundController.getFoundById)
router.get('/founds/specie/:petSpecie', PetFoundController.getFoundBySpecie)
router.get('/founds/sex/:petSex', PetFoundController.getFoundBySex)
router.get('/founds/city/:petCity', PetFoundController.getFoundByCity)
router.get('/founds/size/:petSize', PetFoundController.getFoundBySize)

// OTHER ACTIONS
router.put('/founds/:id', isAdmin, PetFoundController.updateFound)
router.delete('/founds/:id', isAdmin, PetFoundController.deleteFound)

module.exports = router;