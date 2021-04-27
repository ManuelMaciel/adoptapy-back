//basic route configuration 
const express = require('express');
  
const router = express.Router();

//extract multer configuration
require('../config/cloudinary');
const upload = require('../middlewares/multer');

const PetFoundController = require('../controllers/PetFoundController')

//test endpoint
router.get('/founds/test', (req, res, next) => {
  res.status(200).json('adoption endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF ADOPTION
router.get('/founds/list', PetFoundController.getAllFound)

router.get('/founds/list/:id', PetFoundController.getFoundById)

router.get('/founds/list/specie/:petSpecie', PetFoundController.getFoundBySpecie)

router.get('/founds/list/sex/:petSex', PetFoundController.getFoundBySex)

router.get('/founds/list/city/:petCity', PetFoundController.getFoundByCity)

router.get('/founds/list/size/:petSize', PetFoundController.getFoundBySize)

router.put('/founds/editFound/:id', PetFoundController.updateFound)

router.delete('/founds/deleteFound/:id', PetFoundController.deleteFound)

router.post('/founds/createFound', upload.array('petPictures', 10), PetFoundController.createFound)

//END
module.exports = router;