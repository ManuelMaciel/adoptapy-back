const petFound = require('../../models/mascot/PetFoundModel');

//function to create an pet found post
const createFound = async (req, res) => {
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
			let arrPictures = []
			//stores each path element in an array
			req.files.map(async (file) => {
				arrPictures = [...arrPictures, file.path];
			});
			console.log(arrPictures)
			// 
      const newFound = new petFound({
        petData: {
					petName,
					petSpecie,
					petSize,
					petSex,
					petBreed,
					petDescription,
					petCity,	
					petLocation: {
						latitude,
						longitude
					},
					petPictures: arrPictures, //https://medium.com/@lola.omolambe/image-upload-using-cloudinary-node-and-mongoose-2f6f0723c745
				},
        petContact: {
          name,
          number
        }
      });
      // console.dir(req.headers['content-type'])
      const createdFound = await newFound.save();
      return res.status(200).json({ 
        msg: 'Post creado exitosamente.', 
        data: createdFound 
      });
    } catch (error) {
      return res.status(405).json({
        msg: 'Hubo un error al crear el post',
        error: error
      });
    }
  }
  return res.status(400).json({ 
    msg: "No seleccionaste ningun archivo"
  });
}
//function to obtain the complete list of founds posts
const getAllFound = async (req, res) => {
  try {
    const foundList = await petFound.find();
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  foundList
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get a post by id
const getFoundById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundId = await petFound.findById(id);
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  foundId
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by Specie
const getFoundBySpecie = async (req, res) => {
  try {
    const { petSpecie } = req.params;
    const foundSpecie = await petFound.find({ petSpecie });
    return res.status(200).json({
      msg: 'Su peticion ha sido exitosa',
      data:  foundSpecie
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by Sex
const getFoundBySex = async (req, res) => {
  try {
    const { petSex } = req.params;
    const foundSex = await petFound.find({ petSex });
    return res.status(200).json({
      msg: 'Su peticion ha sido exitosa',
      data:  foundSex
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by City
const getFoundByCity = async (req, res) => {
  try {
    const { petCity } = req.params;
    const foundCity = await petFound.find({ petCity });
    return res.status(200).json({
      msg: 'Su peticion ha sido exitosa',
      data:  foundCity
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by Size
const getFoundBySize = async (req, res) => {
  try {
    const { petSize } = req.params;
    const foundSize = await petFound.find({ petSize });
    return res.status(200).json({
      msg: 'Su peticio ha sido exitosa.',
      data:  foundSize
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error realizar su peticion',
      error: error
    });
  }
}
//update the information of a post
const updateFound = async (req, res) => {
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
      latitude,
      longitude,
      name,
      number,
    } = req.body;
    let arrPictures = [ await petFound.findOne({id}).petPictures ]
		//stores each path element in an array
		// req.files.map(async (file) => {
		// 	arrPictures = [...arrPictures, file.path];
		// });
		// console.log(arrPictures)
		// 
    const found = await petFound.findByIdAndUpdate(id, {
      petData: {
				petName,
				petSpecie,
				petAge,
				petSize,
				petSex,
				petBreed,
				petDescription,
				petCity,
				petLocation: {
						latitude: latitude, //dato de prueba
						longitude: longitude, //dato deprueba
				},
        petPictures: arrPictures, //https://medium.com/@lola.omolambe/image-upload-using-cloudinary-node-and-mongoose-2f6f0723c745
			},
      petContact: {
        name: name,
        number: number,
      }
    });
    const updatedFound = await found.save();
    return res.status(200).json({ 
      msg: `Los datos de ${petName} han sido actualizados.`, 
      data: updatedFound
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al actualizar el post',
      error: error
    });
  }
}
//delete an adoption post
const deleteFound = async (req, res) => {
  try {
    const { id } = req.params;
    await petFound.findByIdAndDelete(id);
    const newFoundList = await petFound.find();
    return res.status(200).json({ 
      msg: 'El post ha sido eliminado.', 
      data: newFoundList
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al eliminar el post',
      error: error
    });
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