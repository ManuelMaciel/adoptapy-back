// Authentication
const jwt = require('jsonwebtoken');
const organization = require('../models/user/OrganizationModel');
require('dotenv').config({ path: '.env' }); //DotENV
const { SECRET } = process.env;

const isAuth = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if(!token) return res.status(403).json({
    msg: 'Token invalido'
  })
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;

    const findOrganization = await organization.findById(req.userId, {password: 0});
    if(!findOrganization) return res.status(404).json({
      msg: "Organizacion no encontrada"
    });
    console.log(findOrganization);
    next();
  } catch (error) {
    return res.status(401).send({
      msg: 'No autorizado'
    })
  }
}
// ! check if the function works, I have not tested it yet xd
const checkDuplicateNameOrEmail = async (req, res, next) => {
  try {
    const organizationNameCheck = await organization.findOne({ 
      name: req.body.name 
    });
    if (organizationNameCheck) return res.status(400).json({ 
      msg: 'El nombre ya existe' 
    });
    const organizationEmailCheck = await organization.findOne({ email: req.body.email });
    if (organizationEmailCheck) return res.status(400).json({ 
      msg: 'El correo ya esta registrado' 
    });
    next();
  } catch (error) {
    return res.status(500).json({ 
      msg: error 
    });
  }
}

module.exports = {
  isAuth,
  checkDuplicateNameOrEmail
}