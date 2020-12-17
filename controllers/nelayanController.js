const { Freezer, PengepulOnline, NelayanFreezer, Nelayan } = require('../models/index')

class ControllerNelayan {
   
    static index(req, res){
        Nelayan.findAll()
        .then(data => res.render('nelayan',{data}))
        .catch(err => res.send(err))
    }

    static add(req, res){
        let errors = []
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }
        res.render('nelayan_add', {errors})
    }

    static insert(req, res){
        // console.log(req.body.namaNelayan);
        let obj = {
            namaNelayan: req.body.namaNelayan,
        }
        Nelayan.create(obj)
        .then(() => res.redirect('/nelayan'))
        .catch(err => {
            let errors = err.errors.map(el => el.message)
            // console.log(err.errors[0].message);
            res.redirect(`/nelayan/add?msg=${errors}`)
        })   
    }

    static edit(req, res){
        let errors = []
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }
        let id = +req.params.id
        let nelayan = []
        Nelayan.findByPk(id)
        .then(nelayan_data => {
            nelayan = nelayan_data;
            res.render('nelayan_edit',{nelayan, errors})
        })
        .catch(err => res.send(err))
    }

    static update(req, res){
        let obj = {
            namaNelayan: req.body.namaNelayan,
        }
        let id = +req.params.id
        Nelayan.update(obj, {
            where: {id}
        })
        .then(() => res.redirect('/nelayan'))
        .catch(err => {
            let errors = err.errors.map(el => el.message)
            res.redirect(`/nelayan/edit/${req.params.id}?msg=${errors}`)
        })
    }

    static delete(req, res){
        const id = +req.params.id
        Nelayan.destroy({
            where:  {
            id: id 
            }
        })
        .then(() => res.redirect('/nelayan'))
        .catch(err => res.send(err))
    }

}

module.exports = ControllerNelayan; 

