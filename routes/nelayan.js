const router = require('express').Router()
const ControllerNelayan = require("../controllers/nelayanController")

router.get("/", ControllerNelayan.index) 
router.get("/add", ControllerNelayan.add) 
router.post("/add", ControllerNelayan.insert) 
router.get("/edit/:id", ControllerNelayan.edit) 
router.post("/edit/:id", ControllerNelayan.update) 
router.get("/delete/:id", ControllerNelayan.delete) 


module.exports = router