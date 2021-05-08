const express = require('express')
const router = express.Router()
// The controller
const organizationController = require('../../controllers/user/OrganizationController');
// Middleware
const { isOrganization, checkDuplicateNameOrEmail } = require ('../../middlewares/auth');
//test endpoint
router.get('/org/test', (req, res, next) => {
  res.status(200).json('organization endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF ORGANIZATION SECTION
// GET REQUEST
router.get('/org/list', organizationController.getAllOrganization);
router.get('/org/list/:id', organizationController.getOrganizationById);
router.get('/org/list/:city', organizationController.getOrganizationByCity);
// POST REQUEST
router.post('/org/createOrganization', checkDuplicateNameOrEmail, organizationController.createOrganization);
router.post('/org/signin', organizationController.signInOrganization);
// PUT REQUEST
router.put('/org/edit/:id', isOrganization, organizationController.updateOrganization);
// DELETE REQUEST
router.delete('/org/delete/:id', isOrganization, organizationController.deleteOrganization);
// END
module.exports = router;