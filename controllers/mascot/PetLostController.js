const petLost = require('../../models/mascot/PetLostModel');

//function to create an pet lost post
const createLost = async (req, res, next) => {
  //check if images array is populated
  if (req.files) { 
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
      } = req.body;
      //
       console.log(req.body);
       console.log(req.files[0].path);
      //
      const newLost = new petLost({
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
      });
      // console.dir(req.headers['content-type'])
      const createdLost = await newLost.save();
      return res.status(200).json({ msg: 'El post creado exitosamente.', data: createdLost });
    } catch (error) {
      next(error);
    }
    return res.status(400).json({ msg: "No seleccionaste ningun archivo"})
  }
}

//function to obtain the complete list of lost posts
const getAllLost = async (req, res, next) => {
  try {
    const lostList = await petLost.find();
    return res.status(200).json(lostList);
  } catch (error) {
    next(error);
  }
}

//get a post by id
const getLostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const lostId = await petLost.findById(id);
    return res.status(200).json(lostId);
  } catch (error) {
    next(error);
  }
}

//get all post by Specie
const getLostBySpecie = async (req, res, next) => {
  try {
    const { petSpecie } = req.params;
    const lostSpecie = await petLost.find({petSpecie});
    return res.status(200).json(lostSpecie);
  } catch (error) {
    next(error);
  }
}

//get all post by Sex
const getLostBySex = async (req, res, next) => {
  try {
    const { petSex } = req.params;
    const lostSex = await petLost.find({petSex});
    return res.status(200).json(lostSex);
  } catch (error) {
    next(error);
  }
}

//get all post by City
const getLostByCity = async (req, res, next) => {
  try {
    const { petCity } = req.params;
    const lostCity = await petLost.find({petCity});
    return res.status(200).json(lostCity);
  } catch (error) {
    next(error);
  }
}

//get all post by Size
const getLostBySize = async (req, res, next) => {
  try {
    const { petSize } = req.params;
    const lostSize = await petLost.find({petSize});
    return res.status(200).json(lostSize);
  } catch (error) {
    next(error);
  }
}

//update the information of a post
const updateLost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      petName,
      petSpecie,
      petSize,
      petSex,
      petBreed,
      petDescription,
      petCity,
      petPictures,
      name,
      number,
      date
    } = req.body;
    const lost = await petLost.findByIdAndUpdate(id, {
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
      petPictures,
      petContact : { 
        name : name,
        number : number
      },
      date
    });
    const lostFound = await lost.save();
    return res.status(200).json({ msg: `Los datos de ${petName} han sido actualizados correctamente.`, data: updatedLost});
  } catch (error) {
    next(error);
  }
}

//delete an adoption post
const deleteLost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await petLost.findByIdAndDelete(id);
    const newLostList = await petLost.find();
    return res.status(200).json({ msg: 'El post ha sido eliminado.', data: newLostList});
  } catch (error) {
    next(error);
  }
}


module.exports = {
  createLost, 
  getAllLost,
  getLostById,
  updateLost,
  deleteLost,
  getLostBySpecie,
  getLostBySex,
  getLostByCity,
  getLostBySize
}