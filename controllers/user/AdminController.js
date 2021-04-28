const admin = require('../../models/user/AdminModel');

const createAdmin = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      password
    } = req.body;

     console.log(req.body);
    
    const newAdmin = new admin({
      name,
      email,
      phone,
      password
    });

    const createdAdmin = await newAdmin.save();
    return res.status(200).json({ msg: `El admin ${name} fue creado exitosamente.`, data: createdAdmin});
  } catch (error) {
    next(error);
  }
}


module.exports = {
  createAdmin
}