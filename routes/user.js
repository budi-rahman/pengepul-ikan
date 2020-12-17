const router = require('express').Router()
const ControllerUser = require("../controllers/userController")

router.get("/", ControllerUser.index) 
router.get("/add", ControllerUser.add) 
router.post("/add", ControllerUser.insert) 
router.get("/edit/:id", ControllerUser.edit) 
router.post("/edit/:id", ControllerUser.update) 
router.get("/delete/:id", ControllerUser.delete) 


module.exports = router