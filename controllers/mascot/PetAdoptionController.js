const petAdoption = require('../../models/mascot/PetAdoptionModel')

//function to create an adoption post
const createAdoption = async (req, res, next) => {
  //check if images array is populated
  if (req.files) { 
    try {
      const {
        petName,
        petSpecie,
        petAge,
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
      const newAdoption = new petAdoption({
        petName,
        petSpecie,
        petAge,
        petSize,
        petSex,
        petBreed,
        petDescription,
        petCity,
        petLocation : { 
          latitude : 0.1, //dato de prueba
          longitude : 0.2 //dato deprueba
        },
        petPictures: req.files[0].path, //https://medium.com/@lola.omolambe/image-upload-using-cloudinary-node-and-mongoose-2f6f0723c745
        petContact : { 
          name : name,
          number : number
        },
        date
      });
      // console.dir(req.headers['content-type'])
      const createdAdoption = await newAdoption.save();
      return res.status(200).json({ msg: `Post creado exitosamente.`, data: createdAdoption});

    } catch (error) {
      next(error);
    }
    return res.status(400).json({ msg: "No seleccionaste ningun archivo"});
  }
}

//function to obtain the complete list of adoption posts
const getAllAdoption = async (req, res, next) => {
  try {
    const adoptionList = await petAdoption.find();
    return res.status(200).json(adoptionList);
  } catch (error) {
    next(error);
  }
}

//get a post by id
const getAdoptionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const adoptionId = await petAdoption.findById(id);
    return res.status(200).json(adoptionId);
  } catch (error) {
    next(error);
  }
}

//get all post by Specie
const getAdoptionBySpecie = async (req, res, next) => {
  try {
    const { petSpecie } = req.params;
    const adoptionSpecie = await petAdoption.find({petSpecie});
    return res.status(200).json(adoptionSpecie);
  } catch (error) {
    next(error);
  }
}

//get all post by Sex
const getAdoptionBySex = async (req, res, next) => {
  try {
    const { petSex } = req.params;
    const adoptionSex = await petAdoption.find({petSex});
    return res.status(200).json(adoptionSex);
  } catch (error) {
    next(error);
  }
}

//get all post by City
const getAdoptionByCity = async (req, res, next) => {
  try {
    const { petCity } = req.params;
    const adoptionCity = await petAdoption.find({petCity});
    return res.status(200).json(adoptionCity);
  } catch (error) {
    next(error);
  }
}



//get all post by Size
const getAdoptionBySize = async (req, res, next) => {
  try {
    const { petSize } = req.params;
    const adoptionSize = await petAdoption.find({petSize});
    return res.status(200).json(adoptionSize);
  } catch (error) {
    next(error);
  }
}

//update the information of a post
const updateAdoption = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      petName,
      petSpecie,
      petAge,
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

    const adoption = await petAdoption.findByIdAndUpdate(id, {
      petName,
      petSpecie,
      petAge,
      petSize,
      petSex,
      petBreed,
      petDescription,
      petCity,
      petLocation : { 
        latitude : 0.1, //dato de prueba
        longitude : 0.2 //dato deprueba
      },
      petPictures,
      petContact : { 
        name : name,
        number : number
      },
      date
    });

    const updatedAdoption = await adoption.save();
    return res.status(200).json({ msg: `Los datos de ${petName} han sido actualizados.`, data: updatedAdoption});

  } catch (error) {
    next(error);
  }
}

//delete an adoption post
const deleteAdoption = async (req, res, next) => {
  try {
    const { id } = req.params;
    await petAdoption.findByIdAndDelete(id)
    const newAdoptionList = await petAdoption.find();
    return res.status(200).json({ msg: 'El post ha sido borrado.', data: newAdoptionList });
  } catch (error) {
    next(error);
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
  getAdoptionByCity,
  getAdoptionBySize
}