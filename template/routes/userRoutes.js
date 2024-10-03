const express = require("express")
const {getUser,getAdmin } = require("../controllers/user.controller")
const verifyToken = require("../middlewares/auth.middleware")
const roleMiddleware = require("../middlewares/role.middleware")

const router = express.Router();

// here we'll use middleware for controlled access to routes
// using middleware , we would allow role based access control
router.get('/user',verifyToken,roleMiddleware("role1","role2"),getUser)
router.get('/admin',verifyToken,roleMiddleware("role1"),getAdmin)


module.exports = router