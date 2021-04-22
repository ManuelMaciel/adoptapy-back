const express = require('express')

const router = express.Router()

const PetAdoptionController = require('../controllers/PetAdoptionController')

router.get('/test', (req, res, next) => {
  res.status(200).json('adoption endpoint is working correctly')
})

router.get('/list', PetAdoptionController.getAllAdoption)

router.get('/list/:id', PetAdoptionController.getAdoptionById)

router.get('/list/specie/:petSpecie', PetAdoptionController.getAdoptionBySpecie)

router.put('/editAdoption/:id', PetAdoptionController.updateAdoption)

router.delete('/deleteAdoption/:id', PetAdoptionController.deleteAdoption)

router.post('/createAdoption', PetAdoptionController.createAdoption)

module.exports = router;