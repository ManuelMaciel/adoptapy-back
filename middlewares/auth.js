// Authentication
const jwt = require('jsonwebtoken');
const organization = require('../models/user/OrganizationModel');
const admin = require('../models/user/AdminModel');
require('dotenv').config({ path: '.env' }); //DotENV
const { SECRET } = process.env;

const isOrganization = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if(!token) return res.status(403).json({
    msg: 'Acceso denegado'
  })
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;

    const findOrganization = await organization.findById(req.userId, {password: 0});
    if(!findOrganization) return res.status(404).json({
      msg: 'Token no valido'
    });
    console.log(decoded);
    next();
  } catch (error) {
    return res.status(401).send({
      msg: 'No autorizado'
    })
  }
}

const isAdmin = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if(!token) return res.status(403).json({
    msg: 'Acceso denegado'
  })
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;

    const findAdmin = await admin.findById(req.userId, {password: 0});
    if(!findAdmin) return res.status(404).json({
      msg: 'Token no valido'
    });
    console.log(decoded);
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
  isOrganization,
  isAdmin,
  checkDuplicateNameOrEmail
}