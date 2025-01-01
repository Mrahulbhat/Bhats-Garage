const express = require("express");
const router = express.Router();
const {getAllVehicles,login, addVehicle} = require('../controllers/controller.js');

router.post('/login',login);
router.get('/dashboard',getAllVehicles);
router.post('/add-vehicle',addVehicle);



module.exports = router;
