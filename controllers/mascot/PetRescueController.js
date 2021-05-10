const petRescue = require('../../models/mascot/PetRescueModel');

//function to create an pet rescue post
const createRescue = async (req, res) => {
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
        number
      } = req.body;
      // 
			let arrPictures = []
			//stores each path element in an array
			req.files.map(async (file) => {
				arrPictures = [...arrPictures, file.path];
			});
			console.log(arrPictures)
			// 
      const newRescue = new petRescue({
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
        },
				postCreator: req.userId 
      });
      // console.dir(req.headers['content-type'])
      const createdRescue = await newRescue.save();
      return res.status(200).json({ 
        msg: 'Post creado exitosamente.', 
        data: createdRescue
      });
    } catch (error) {
			console.log(error)
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
//function to obtain the complete list of rescue posts
const getAllRescue = async (req, res) => {
  try {
    const rescueList = await petRescue.find();
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  rescueList
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get a post by id
const getRescueById = async (req, res) => {
  try {
    const { id } = req.params;
    const rescueId = await petRescue.findById(id);
    return res.status(200).json({
      msg: 'Su peticion ha sido realizada',
      data:  rescueIf
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by Specie
const getRescueBySpecie = async (req, res) => {
  try {
    const { petSpecie } = req.params;
    const rescueSpecie = await petRescue.find({ petData: { petSpecie } });
    return res.status(200).json({
      msg: 'Su peticion ha sido exitosa',
      data:  rescueSpecie
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by Sex
const getRescueBySex = async (req, res) => {
  try {
    const { petSex } = req.params;
    const rescueSex = await petRescue.find({ petData: { petSex } });
    return res.status(200).json({
      msg: 'Su peticion ha sido exitosa',
      data:  rescueSex
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by City
const getRescueByCity = async (req, res) => {
  try {
    const { petCity } = req.params;
    const rescueCity = await petRescue.find({ petData: { petCity } });
    return res.status(200).json({
      msg: 'Su peticion ha sido exitosa',
      data:  rescueCity
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al realizar su peticion',
      error: error
    });
  }
}
//get all post by Size
const getRescueBySize = async (req, res) => {
  try {
    const { petSize } = req.params;
    const rescueSize = await petRescue.find({ petData: { petSize } });
    return res.status(200).json({
      msg: 'Su peticio ha sido exitosa.',
      data:  rescueSize
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error realizar su peticion',
      error: error
    });
  }
}
//update the information of a post
const updateRescue = async (req, res) => {
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
    let arrPictures = [ await petRescue.findOne({id}).petPictures ]
		//stores each path element in an array
		// req.files.map(async (file) => {
		// 	arrPictures = [...arrPictures, file.path];
		// });
		// console.log(arrPictures)
		// 
    const rescue = await petRescue.findByIdAndUpdate(id, {
      petData: {
				petName,
				petSpecie,
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
    const updatedRescue = await rescue.save();
    return res.status(200).json({ 
      msg: `Los datos de ${petName} han sido actualizados.`, 
      data: updatedRescue
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al actualizar el post',
      error: error
    });
  }
}
//delete an adoption post
const deleteRescue = async (req, res) => {
  try {
    const { id } = req.params;
    await petRescue.findByIdAndDelete(id);
    const newRescueList = await petRescue.find();
    return res.status(200).json({ 
      msg: 'El post ha sido eliminado.', 
      data: newRescueList
    });
  } catch (error) {
    return res.status(405).json({
      msg: 'Hubo un error al eliminar el post',
      error: error
    });
  }
}

module.exports = {
  createRescue, 
  getAllRescue,
  getRescueById,
  updateRescue,
  deleteRescue,
  getRescueBySpecie,
  getRescueBySex,
  getRescueByCity,
  getRescueBySize
}