const express = require("express");
const router = express.Router();
const organizationController = require("../../controllers/user/OrganizationController");
// Middleware
const {
  checkDuplicateNameOrEmail,
  hasPermission,
} = require("../../middlewares/auth");

//test endpoint
router.get("/org/test", (req, res, next) => {
  res.status(200).json("organization endpoint is working correctly");
});

// START OF ALL VALID ENPOINTS OF ORGANIZATION SECTION
router.post(
  "/org",
  checkDuplicateNameOrEmail,
  organizationController.createOrganization
);

// GET REQUESTS
router.get("/org", organizationController.getAllOrganization);
router.get("/org/:id", organizationController.getOrganizationById);
router.get("/org/:city", organizationController.getOrganizationByCity);

// LOGIN
router.post("/org/signin", organizationController.signInOrganization);

// OTHER ACTIONS
router.put(
  "/org/:id",
  hasPermission,
  organizationController.updateOrganization
);
router.delete(
  "/org/:id",
  hasPermission,
  organizationController.deleteOrganization
);

module.exports = router;
