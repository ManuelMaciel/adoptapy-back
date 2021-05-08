//basic route configuration 
const express = require('express');
const router = express.Router();
//extract multer configuration
require('../../config/cloudinary');
const upload = require('../../middlewares/multer');
// The controller
const PetLostController = require('../../controllers/mascot/PetLostController');
// Middleware
const { isAdmin } = require ('../../middlewares/auth');
//test endpoint
router.get('/lost/test', (req, res, next) => {
  res.status(200).json('lost endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF LOST POSTS
// GET REQUEST
router.get('/losts/list', PetLostController.getAllLost)
router.get('/losts/list/:id', PetLostController.getLostById)
router.get('/losts/list/specie/:petSpecie', PetLostController.getLostBySpecie)
router.get('/losts/list/sex/:petSex', PetLostController.getLostBySex)
router.get('/losts/list/city/:petCity', PetLostController.getLostByCity)
router.get('/losts/list/size/:petSize', PetLostController.getLostBySize)
// POST REQUEST
router.post('/losts/createLost', upload.array('petPictures', 2), PetLostController.createLost)
// PUT REQUEST
router.put('/losts/editLost/:id', isAdmin, PetLostController.updateLost)
// DELETE REQUEST
router.delete('/losts/deleteLost/:id', isAdmin, PetLostController.deleteLost)
//END

module.exports = router;