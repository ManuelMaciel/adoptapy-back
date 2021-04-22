const express = require('express')

const router = express.Router()

const PetAdoptionController = require('../controllers/PetAdoptionController')

router.get('/test', (req, res, next) => {
  res.status(200).json('adoption endpoint is working correctly')
})

router.get('/adoptions/list', PetAdoptionController.getAllAdoption)

router.get('/adoptions/list/:id', PetAdoptionController.getAdoptionById)

router.get('/adoptions/list/specie/:petSpecie', PetAdoptionController.getAdoptionBySpecie)

router.get('/adoptions/list/sex/:petSex', PetAdoptionController.getAdoptionBySex)

router.get('/adoptions/list/location/:petLocation', PetAdoptionController.getAdoptionByLocation)

router.get('/adoptions/list/size/:petSize', PetAdoptionController.getAdoptionBySize)

router.put('/adoptions/editAdoption/:id', PetAdoptionController.updateAdoption)

router.delete('/adoptions/deleteAdoption/:id', PetAdoptionController.deleteAdoption)

router.post('/adoptions/createAdoption', PetAdoptionController.createAdoption)

module.exports = router;