const petAdoption = require("../../models/mascot/PetAdoptionModel");

//function to create an adoption post
const createAdoption = async (req, res) => {
	//check if images array is populated
	if(req.files) {
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
			console.log(req.files)
			console.log(req.body)
			console.log(arrPictures)
			// 
			const newAdoption = new petAdoption({
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
			const createdAdoption = await newAdoption.save();
			return res.status(200).json({
				msg: `Post creado exitosamente.`,
				data: createdAdoption,
			});
		} catch (error) {
			// console.log(error)
				return res.status(405).json({
					msg: "Hubo un error al crear el post",
					error: error,
			});
		}
	}
	return res.status(400).json({ 
    msg: "No seleccionaste ningun archivo"
  });
};
//function to obtain the complete list of adoption posts
const getAllAdoption = async (req, res) => {
  try {
    const adoptionList = await petAdoption.find();
    return res.status(200).json({
      msg: "Su peticion ha sido exitosa",
      data: adoptionList,
    });
  } catch (error) {
    return res.status(400).json({
      msg: error,
    });
  }
};
//get a post by id
const getAdoptionById = async (req, res) => {
    try {
        const { id } = req.params;
        const adoptionId = await petAdoption.findById(id);
        return res.status(200).json({
            msg: "Su peticion ha sido exitosa.",
            data: adoptionId,
        });
    } catch (error) {
        return res.status(400).json({
            msg: error,
        });
    }
};
//get all post by Specie
const getAdoptionBySpecie = async (req, res) => {
    try {
        const { petSpecie } = req.params;
        const adoptionSpecie = await petAdoption.find({ petData: {petSpecie} });
        return res.status(200).json({
            msg: "Su peticion ha sido exitosa",
            data: adoptionSpecie,
        });
    } catch (error) {
        return res.status(400).json({
            msg: error,
        });
    }
};
//get all post by Sex
const getAdoptionBySex = async (req, res) => {
    try {
        const { petSex } = req.params;
        const adoptionSex = await petAdoption.find({ petSex });
        return res.status(200).json({
            msg: "Su peticion ha sido exitosa.",
            data: adoptionSex,
        });
    } catch (error) {
        return res.status(400).json({
            msg: error,
        });
    }
};
//get all post by City
const getAdoptionByCity = async (req, res) => {
    try {
        const { petCity } = req.params;
        const adoptionCity = await petAdoption.find({ petCity });
        return res.status(200).json({
            msg: "Su peticion ha sido exitosa.",
            data: adoptionCity,
        });
    } catch (error) {
        return res.status(400).json({
            msg: error,
        });
    }
};
//get all post by Size
const getAdoptionBySize = async (req, res) => {
    try {
        const { petSize } = req.params;
        const adoptionSize = await petAdoption.find({ petSize });
        return res.status(200).json({
            msg: "Su peticion ha sido exitosa",
            data: adoptionSize,
        });
    } catch (error) {
        return res.status(400).json({
            msg: error,
        });
    }
};
//update the information of a post
const updateAdoption = async (req, res) => {
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
				latitude,
				longitude,
				name,
				number
		} = req.body;
		// 
		let arrPictures = [ await petAdoption.findOne({id}).petPictures ]
		//stores each path element in an array
		// req.files.map(async (file) => {
		// 	arrPictures = [...arrPictures, file.path];
		// });
		// console.log(arrPictures)
		// 
		const adoption = await petAdoption.findByIdAndUpdate(id, {
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
		const updatedAdoption = await adoption.save();
		return res.status(200).json({
				msg: `Los datos de ${petName} han sido actualizados.`,
				data: updatedAdoption,
		});
	} catch (error) {
		return res.status(400).json({
				msg: error,
		});
	}
};
//delete an adoption post
const deleteAdoption = async (req, res) => {
    try {
        const { id } = req.params;
        await petAdoption.findByIdAndDelete(id);
        const newAdoptionList = await petAdoption.find();
        return res.status(200).json({
            msg: "El post ha sido borrado.",
            data: newAdoptionList,
        });
    } catch (error) {
        return res.status(400).json({
            msg: error,
        });
    }
};

module.exports = {
    createAdoption,
    getAllAdoption,
    getAdoptionById,
    updateAdoption,
    deleteAdoption,
    getAdoptionBySpecie,
    getAdoptionBySex,
    getAdoptionByCity,
    getAdoptionBySize,
};
