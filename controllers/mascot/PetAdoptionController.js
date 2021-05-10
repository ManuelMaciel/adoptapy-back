const petAdoption = require("../../models/mascot/PetAdoptionModel");

// ! TODO: It is not yet possible to upload more than one file
//to do so you have to go through the file request and upload them one by one.
//function to create an adoption post
const createAdoption = async (req, res) => {
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
        number,
        date,
      } = req.body;
      const newAdoption = new petAdoption({
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
        petPictures: req.files[0].path, //https://medium.com/@lola.omolambe/image-upload-using-cloudinary-node-and-mongoose-2f6f0723c745
        petContact: {
          name: name,
          number: number,
        },
        date,
        });
        // console.dir(req.headers['content-type'])
        const createdAdoption = await newAdoption.save();
        return res.status(200).json({
          msg: `Post creado exitosamente.`,
          data: createdAdoption,
        });
      } catch (error) {
        return res.status(405).json({
          msg: "Hubo un error al crear el post",
          error: error,
        });
      }
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
        const adoptionSpecie = await petAdoption.find({ petSpecie });
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
            number,
            date,
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
            petLocation: {
                latitude: latitude, //dato de prueba
                longitude: longitude, //dato deprueba
            },
            petContact: {
                name: name,
                number: number,
            },
            date,
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
const deleteAdoption = async (req, res, next) => {
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
