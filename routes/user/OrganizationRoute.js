const express = require('express')
const router = express.Router()
// The controller
const organizationController = require('../../controllers/user/OrganizationController');
//test endpoint
router.get('/org/test', (req, res, next) => {
  res.status(200).json('organization endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF ORGANIZATION SECTION
router.post('/createOrganization', organizationController.createOrganization);
// END
module.exports = router;