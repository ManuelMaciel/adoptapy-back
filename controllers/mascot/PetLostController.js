const petLost = require('../../models/mascot/PetLostModel');

// ! TODO: It is not yet possible to upload more than one file, to do so you have to go through the file request and upload them one by one.
//function to create an pet lost post
const createLost = async (req, res) => {
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
        latitude,
        longitude,
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
          latitude : latitude, //dato de prueba
          longitude : longitude //dato de prueba
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
      return res.status(200).json({ 
        msg: 'El post creado exitosamente.', 
        data: createdLost 
      });
    } catch (error) {
      return res.status(405).json({
        msg: 'Hubo un error al crear el post',
        error: error
      });
    }
  }
  return res.status(400).json({ 
    msg: 'No seleccionaste ningun archivo, por favor seleccione aunque sea uno.'
  });
}
//function to obtain the complete list of lost posts
const getAllLost = async (req, res) => {
  try {
    const lostList = await petLost.find();
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  lostList
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get a post by id
const getLostById = async (req, res) => {
  try {
    const { id } = req.params;
    const lostId = await petLost.findById(id);
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  lostId
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by Specie
const getLostBySpecie = async (req, res) => {
  try {
    const { petSpecie } = req.params;
    const lostSpecie = await petLost.find({petSpecie});
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  lostSpecie
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by Sex
const getLostBySex = async (req, res) => {
  try {
    const { petSex } = req.params;
    const lostSex = await petLost.find({petSex});
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  lostSex
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by City
const getLostByCity = async (req, res) => {
  try {
    const { petCity } = req.params;
    const lostCity = await petLost.find({petCity});
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  lostCity
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al crear el post',
      error: error
    });
  }
}
//get all post by Size
const getLostBySize = async (req, res) => {
  try {
    const { petSize } = req.params;
    const lostSize = await petLost.find({petSize});
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  lostSize
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//update the information of a post
const updateLost = async (req, res) => {
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
      latitude,
      longitude,
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
        latitude : latitude, //dato de prueba
        longitude : longitude //dato de prueba
      },
      petPictures,
      petContact : { 
        name : name,
        number : number
      },
      date
    });
    const lostFound = await lost.save();
    return res.status(200).json({ 
      msg: `Los datos de ${petName} han sido actualizados correctamente.`, 
      data: updatedLost
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al actualizar el post',
      error: error
    });
  }
}
//delete an adoption post
const deleteLost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await petLost.findByIdAndDelete(id);
    const newLostList = await petLost.find();
    return res.status(200).json({ 
      msg: 'El post ha sido eliminado.', 
      data: newLostList
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al eliminar el post',
      error: error
    });
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