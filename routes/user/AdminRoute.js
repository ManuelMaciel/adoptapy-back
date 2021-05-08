const express = require('express')
const router = express.Router()
// The controller
const adminController = require('../../controllers/user/AdminController');
//test endpoint
router.get('/admin/test', (req, res, next) => {
  res.status(200).json('admin endpoint is working correctly')
})

// START OF ALL VALID ENPOINTS OF ADMIN SECTION
// POST REQUEST
router.post('/admin/createAdmin', adminController.createAdmin);
router.post('/admin/signin', adminController.signInAdmin);
// END
module.exports = router;