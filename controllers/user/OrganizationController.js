const organization = require('../../models/user/OrganizationModel');
//Create a new organization
// TODO: depending on the existence of an invitation token, to validate the creation of the organization
const createOrganization = async (req, res, next) => {
  try {
    const {
      name, // * Org Data
      email,
      password,
      phone,
      ownerName,
      street,
      city,
      latitude, // *  Location
      longitude,
      facebook, // * Social Media
      instagram,
      twitter,
      website,
      holder, // * Donations
      savingBank,
      bankName,
      ruc,
      tigo,
      personal,
      claro,
      description // * About
    } = req.body;
    
    const newOrganization = new organization({
      name, // * Org Data
      email,
      password,
      phone,
      ownerName,
      street,
      city,
      latitude, // *  Location
      longitude,
      facebook, // * Social Media
      instagram,
      twitter,
      website,
      holder, // * Donations
      savingBank,
      bankName,
      ruc,
      tigo,
      personal,
      claro,
      description // * About
    });

    const createdOrganization = await newOrganization.save();
    return res.status(200).json({ 
      msg: `La organizacion ${name} ha sido creada exitosamente en nuestra plataforma.`, 
      data: createdAdmin
    });
  } catch (error) {
    next(error);
  }
}
// Get complete list of all organization
const getAllOrganization = async (req, res, next) => {
  try {
    const organizationList = await organization.find();
    return res.status(200).json({
      data: organizationList
    });
  } catch (error) {
    next(error);
  }
}
// Obtain an Organization by id
const getOrnanizationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const organizationId = await organization.findById(id);
    return res.status(200).json({
      data: organizationId
    });
  } catch (error) {
    next(error);
  }
}
// Get all organization by city
const getOrganizationByCity = async (req, res, next) => {
  try {
    const { city } = req.params;
    const organizationCity = await organization.find({address: { city } });
    return res.status(200).json({
      data: organizationCity
    });
  } catch (error) {
    next(error);
  }
}
// change the data of an organization
const updateOrganization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name, // * Org Data
      email,
      password,
      phone,
      ownerName,
      street,
      city,
      latitude, // *  Location
      longitude,
      facebook, // * Social Media
      instagram,
      twitter,
      website,
      holder, // * Donations
      savingBank,
      bankName,
      ruc,
      tigo,
      personal,
      claro,
      description // * About
    } = req.body;

    const organization = await organization.findByIdAndUpdate(id, {
      name, // * Org Data
      email,
      password,
      phone,
      ownerName,
      street,
      city,
      latitude, // *  Location
      longitude,
      facebook, // * Social Media
      instagram,
      twitter,
      website,
      holder, // * Donations
      savingBank,
      bankName,
      ruc,
      tigo,
      personal,
      claro,
      description // * About
    });
    const updatedOrganization = await organization.save();
    return res.status(200).json({ 
      msg: `Los datos de ${name} han sido actualizados.`,
      data: updatedOrganization
    });
  } catch (error) {
    next(error);
  }
}
//Delete an organization
const deleteOrganization = async (req, res, next) => {
  try {
    const { id } = req.params;
    await organization.findByIdAndDelete(id)
    const newOrganizationList = await organization.find();
    return res.status(200).json({ 
      msg: 'La organizacion ha sido eliminada.', 
      data: newAdoptionList 
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createOrganization,
  getAllOrganization,
  getOrnanizationById,
  getOrganizationByCity,
  updateOrganization,
  deleteOrganization
}