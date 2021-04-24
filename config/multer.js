//configuracion de multer
const multer = require("multer");
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require('multer-storage-cloudinary'); //revisar la documentacion de esta liberia

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: {

      folder: "adoptapy",      
      allowedFormats: ["jpg", "png", "jpeg"],
      transformation: [{
      width: 500,
      height: 500,
      crop: "limit"
      }]

  }

});

const upload = multer({storage: storage});

module.exports = upload;