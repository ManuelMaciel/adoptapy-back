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
router.get('/found/test', (req, res, next) => {
  res.status(200).json('found endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF FOUND POST
router.post('/found', upload.array('petPictures', 2), PetFoundController.createFound)

// GET REQUESTS
router.get('/found', PetFoundController.getAllFound)
router.get('/found/:id', PetFoundController.getFoundById)
router.get('/found/specie/:petSpecie', PetFoundController.getFoundBySpecie)
router.get('/found/sex/:petSex', PetFoundController.getFoundBySex)
router.get('/found/city/:petCity', PetFoundController.getFoundByCity)
router.get('/found/size/:petSize', PetFoundController.getFoundBySize)

// OTHER ACTIONS
router.put('/found/:id', isAdmin, PetFoundController.updateFound)
router.delete('/found/:id', isAdmin, PetFoundController.deleteFound)

module.exports = router;