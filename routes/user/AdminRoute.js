const express = require('express')
const router = express.Router()
// The controller
const adminController = require('../../controllers/user/AdminController');
// Middleware
const { isAdmin } = require ('../../middlewares/auth');
//test endpoint
router.get('/admin/test', (req, res, next) => {
  res.status(200).json('admin endpoint is working correctly')
})
// START OF ALL VALID ENPOINTS OF ADMIN SECTION
router.post('/admin', adminController.createAdmin); // create a new admin
router.post('/admin/signin', adminController.signInAdmin); // login
// END
module.exports = router;