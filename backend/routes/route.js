const express = require("express");
const router = express.Router();
const {getAllVehicles,login, addVehicle} = require('../controllers/controller.js');


router.post('/add-vehicle',addVehicle)
router.get('/vehicles',getAllVehicles);
router.post('/login',login);



module.exports = router;
