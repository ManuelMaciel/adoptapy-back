const petFound = require('../models/PetFoundModel')

//function to create an pet found post
const createFound = async (req, res, next) => {
  if (req.files) { //check if images array is populated
    try {
      const {
        petName,
        petSpecie,
        petSize,
        petSex,
        petBreed,
        petDescription,
        petCity,
        name,
        number,
        date
      } = req.body
       console.log(req.body);
       console.log(req.files[0].path);
      const newFound = new petFound({
        petName,
        petSpecie,
        petSize,
        petSex,
        petBreed,
        petDescription,
        petCity,
        petLocation : { 
          latitude : 0.1, //dato de prueba
          longitude : 0.2 //dato de prueba
        },
        petPictures: req.files[0].path, //https://medium.com/@lola.omolambe/image-upload-using-cloudinary-node-and-mongoose-2f6f0723c745
        petContact : { 
          name : name,
          number : number
        },
        date
      })
      // console.dir(req.headers['content-type'])
      console.log(newFound)
      const createdFound = await newFound.save()
      return res.status(200).json(createdFound)
    } catch (error) {
      next(error)
    }
    
    }
    return res.status(400).json({ msg: "No seleccionaste ningun archivo"})
}

//function to obtain the complete list of founds posts
const getAllFound = async (req, res, next) => {
  try {
    const foundList = await petFound.find()
    return res.status(200).json(foundList)
  } catch (error) {
    next(error)
  }
}

//get a post by id
const getFoundById = async (req, res, next) => {
  try {
    const { id } = req.params
    const foundId = await petFound.findById(id)
    return res.status(200).json(foundId)
  } catch (error) {
    next(error)
  }
}

//get all post by Specie
const getFoundBySpecie = async (req, res, next) => {
  try {
    const { petSpecie } = req.params
    const foundSpecie = await petFound.find({petSpecie})
    console.log(petSpecie)
    return res.status(200).json(foundSpecie)
  } catch (error) {
    next(error)
  }
}

//get all post by Sex
const getFoundBySex = async (req, res, next) => {
  try {
    const { petSex } = req.params
    const foundSex = await petFound.find({petSex})
    console.log(petSex)
    return res.status(200).json(foundSex)
  } catch (error) {
    next(error)
  }
}

//get all post by City
const getFoundByCity = async (req, res, next) => {
  try {
    const { petCity } = req.params
    const foundCity = await petFound.find({petCity})
    console.log(petCity)
    return res.status(200).json(foundCity)
  } catch (error) {
    next(error)
  }
}



//get all post by Size
const getFoundBySize = async (req, res, next) => {
  try {
    const { petSize } = req.params
    const foundSize = await petFound.find({petSize})
    console.log(petSize)
    return res.status(200).json(foundSize)
  } catch (error) {
    next(error)
  }
}

//update the information of a post
const updateFound = async (req, res, next) => {
  try {
    const { id } = req.params
    const {
      petName,
      petSpecie,
      petSize,
      petSex,
      petBreed,
      petDescription,
      petLocation,
      petPictures,
      name,
      number,
      date
    } = req.body
    const found = await petFound.findByIdAndUpdate(id, {
      petName,
      petSpecie,
      petSize,
      petSex,
      petBreed,
      petDescription,
      petLocation,
      petPictures,
      petContact : { 
        name : name,
        number : number
      },
      date
    })
    await updateFound.validate()
    const updatedFound = await found.save()
    return res.status(200).json(updatedFound)
  } catch (error) {
    next(error)
  }
}

//delete an adoption post
const deleteFound = async (req, res, next) => {
  try {
    const { id } = req.params
    await petFound.findByIdAndDelete(id)
    const newFoundList = await petFound.find()
    return res.status(200).json(newFoundList)
  } catch (error) {
    next(error)
  }
}


module.exports = {
  createFound, 
  getAllFound,
  getFoundById,
  updateFound,
  deleteFound,
  getFoundBySpecie,
  getFoundBySex,
  getFoundByCity,
  getFoundBySize
}