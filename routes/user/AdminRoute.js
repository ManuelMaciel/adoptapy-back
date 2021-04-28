const express = require('express')

const adminController = require('../../controllers/user/AdminController');

const router = express.Router()

// START OF ALL VALID ENPOINTS OF ADMIN SECTION
router.post('/createAdmin', adminController.createAdmin);
// END
module.exports = router;