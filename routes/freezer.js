const router = require('express').Router()
const ControllerFreezer = require("../controllers/freezerController")

router.get("/", ControllerFreezer.index) 
router.get("/add", ControllerFreezer.add) 
router.post("/add", ControllerFreezer.insert) 
router.get("/edit/:id", ControllerFreezer.edit) 
router.post("/edit/:id", ControllerFreezer.update) 
router.get("/delete/:id", ControllerFreezer.delete) 
router.get('/nelayan/:id', ControllerFreezer.index_nelayan_freezer)
router.get('/nelayan/add/:id', ControllerFreezer.add_nelayan)
router.post('/nelayan/add/:id', ControllerFreezer.insert_nelayan)

module.exports = router