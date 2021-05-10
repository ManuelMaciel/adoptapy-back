//basic route configuration
const express = require("express");
const router = express.Router();

//extract multer configuration
require("../../config/cloudinary");
const upload = require("../../middlewares/multer");

// controller
const PetRescueController = require("../../controllers/mascot/PetRescueController");

// Middlewares
const { isAdmin, hasPermission } = require("../../middlewares/auth");

//test endpoint
router.get("/rescues/test", hasPermission, (req, res, next) => {
  res.status(200).json("rescue endpoint is working correctly");
});

// START OF ALL VALID ENPOINTS OF ADOPTION POST
router.post(
  "/rescues",
  hasPermission,
  upload.array("petPictures", 2),
  PetRescueController.createRescue
);

// GET REQUESTS
router.get("/rescues", PetRescueController.getAllRescue);
router.get("/rescues/:id", PetRescueController.getRescueById);
router.get(
  "/rescues/specie/:petSpecie",
  PetRescueController.getRescueBySpecie
);
router.get("/rescues/sex/:petSex", PetRescueController.getRescueBySex);
router.get("/rescues/city/:petCity", PetRescueController.getRescueByCity);
router.get("/rescues/size/:petSize", PetRescueController.getRescueBySize);

// OTHER ACTIONS
router.put("/rescues/:id", isAdmin, PetRescueController.updateRescue);
router.delete("/rescues/:id", isAdmin, PetRescueController.deleteRescue);

module.exports = router;
