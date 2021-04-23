const petAdoption = require('../models/PetAdoptionModel')

//function to create an adoption post
const createAdoption = async (req, res, next) => {
  try {
    const {
      petName,
      petSpecie,
      petAge,
      petSize,
      petSex,
      petBreed,
      petDescription,
      petLocation,
      petPictures,
      petOwner,
      date
    } = req.body
    console.log(req.body) //no muestra el console log del request body
    const newAdoption = new petAdoption({
      petName,
      petSpecie,
      petAge,
      petSize,
      petSex,
      petBreed,
      petDescription,
      petLocation,
      petPictures: req.file.url, //https://medium.com/@lola.omolambe/image-upload-using-cloudinary-node-and-mongoose-2f6f0723c745 (ver de guia) muestra que haciendo la referencia a req.file ya guarda el path de la imagen, pero en postman no carga, y en consola sale undefined
      petOwner,
      date
    })
    console.log(petPictures)
    await petAdoption.validate()
    //tampoco guarda el record de las adopciones, esto es porque se validan y como petPicture no contiene nada no se ejecuta
    //si dejas como petPicture: 'textp', se guarda
    const createdAdoption = await newAdoption.save()
    return res.status(200).json(createdAdoption)
  } catch (error) {
    next(error)
  }
}

//function to obtain the complete list of adoption posts
const getAllAdoption = async (req, res, next) => {
  try {
    const adoptionList = await petAdoption.find()
    return res.status(200).json(adoptionList)
  } catch (error) {
    next(error)
  }
}

//get a post by id
const getAdoptionById = async (req, res, next) => {
  try {
    const { id } = req.params
    const adoptionId = await petAdoption.findById(id)
    return res.status(200).json(adoptionId)
  } catch (error) {
    next(error)
  }
}

//get all post by Specie
const getAdoptionBySpecie = async (req, res, next) => {
  try {
    const { petSpecie } = req.params
    const adoptionSpecie = await petAdoption.find({petSpecie})
    console.log(petSpecie)
    return res.status(200).json(adoptionSpecie)
  } catch (error) {
    next(error)
  }
}

//get all post by Sex
const getAdoptionBySex = async (req, res, next) => {
  try {
    const { petSex } = req.params
    const adoptionSex = await petAdoption.find({petSex})
    console.log(petSex)
    return res.status(200).json(adoptionSex)
  } catch (error) {
    next(error)
  }
}

//get all post by Location
const getAdoptionByLocation = async (req, res, next) => {
  try {
    const { petLocation } = req.params
    const adoptionLocation = await petAdoption.find({petLocation})
    console.log(petLocation)
    return res.status(200).json(adoptionLocation)
  } catch (error) {
    next(error)
  }
}



//get all post by Size
const getAdoptionBySize = async (req, res, next) => {
  try {
    const { petSize } = req.params
    const adoptionSize = await petAdoption.find({petSize})
    console.log(petSize)
    return res.status(200).json(adoptionSize)
  } catch (error) {
    next(error)
  }
}

//update the information of a post
const updateAdoption = async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      petName,
      petSpecie,
      petAge,
      petSize,
      petSex,
      petBreed,
      petDescription,
      petLocation,
      petPictures,
      petOwner,
      date
    } = req.body
    const adoption = await petAdoption.findByIdAndUpdate(id, {
      petName,
      petSpecie,
      petAge,
      petSize,
      petSex,
      petBreed,
      petDescription,
      petLocation,
      petPictures,
      petOwner,
      date
    })
    await updateAdoption.validate()
    const updatedAdoption = await adoption.save()
    return res.status(200).json(updatedAdoption)
  } catch (error) {
    next(error)
  }
}

//delete an adoption post
const deleteAdoption = async (req, res, next) => {
  try {
    const { id } = req.params
    await petAdoption.findByIdAndDelete(id)
    const newAdoptionList = await petAdoption.find()
    return res.status(200).json(newAdoptionList)
  } catch (error) {
    next(error)
  }
}


module.exports = {
  createAdoption, 
  getAllAdoption,
  getAdoptionById,
  updateAdoption,
  deleteAdoption,
  getAdoptionBySpecie,
  getAdoptionBySex,
  getAdoptionByLocation,
  getAdoptionBySize
}