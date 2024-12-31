const express = require("express");
const router = express.Router();
const User = require('../models/user_model.js');
const {createUser,getAllUsers,login} = require('../controllers/controller.js');
//create User

router.get('/getAllUsers',getAllUsers)
router.post("/signup", createUser);
router.post('/login',login);



module.exports = router;
