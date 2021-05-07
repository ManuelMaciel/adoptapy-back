const express = require('express')

const organizationController = require('../../controllers/user/OrganizationController');

const router = express.Router()

// START OF ALL VALID ENPOINTS OF ORGANIZATION SECTION
router.post('/createOrganization', organizationController.createOrganization);
// END
module.exports = router;