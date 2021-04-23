const express = require('express')
  
const router = express.Router()
  
require('../config/cloudinary');
const upload = require('../config/multer');

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
//revisar la funcion upload, se encarga de subir al cloud la foto, el parametro petPicture representa la key o el id para el input donde se agregan las imagenes
//primero se suben las imagenes y luego se ejecuta el controlador, pero el controlador no guarda los records en la base de datos
//al validar que todos los campos esten completos no consigo que petPictures tenga una referencia al path de donde se subio la imagen
router.post('/adoptions/createAdoption', upload.single('petPictures'), PetAdoptionController.createAdoption)

module.exports = router;