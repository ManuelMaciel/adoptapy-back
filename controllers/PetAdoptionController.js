const petAdoption = require('../models/PetAdoptionModel')

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
    console.log(req.body)
    const newAdoption = new petAdoption({
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

    await petAdoption.validate()

    const createdAdoption = await newAdoption.save()
    return res.status(200).json(createdAdoption)
  } catch (error) {
    next(error)
  }
}

const getAllAdoption = async (req, res, next) => {
  try {
    const adoptionList = await petAdoption.find()
    return res.status(200).json(adoptionList)
  } catch (error) {
    next(error)
  }
}

const getAdoptionById = async (req, res, next) => {
  try {
    const { id } = req.params
    const adoptionId = await petAdoption.findById(id)
    return res.status(200).json(adoptionId)
  } catch (error) {
    next(error)
  }
}

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
  deleteAdoption
}