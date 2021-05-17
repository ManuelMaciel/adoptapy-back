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
    // 
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;
    // 
    const foundList = await petFound.paginate({}, {limit, page});
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
}