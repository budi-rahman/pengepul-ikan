const { Freezer, PengepulOnline, NelayanFreezer, Nelayan } = require('../models/index')

class ControllerFreezer {
   
    static index(req, res){
        Freezer.findAll()
        .then(data => {
            // console.log(data[0].id);
            res.render('freezer',{data})
        })
        .catch(err => res.send(err))
    }

    static add(req, res){
        let errors = []
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }
        res.render('freezer_add', {errors})
    }

    static insert(req, res){
        // console.log(req.body.namaIkan);
        let obj = {
            namaIkan: req.body.namaIkan,
            stockIkan: 0,
            pengepulOnlineId: 1
        }
        Freezer.create(obj)
        .then(() => res.redirect('/freezer'))
        .catch(err => {
            let errors = err.errors.map(el => el.message)
            // console.log(err.errors[0].message);
            res.redirect(`/freezer/add?msg=${errors}`)
        })     
    }

    static edit(req, res){
        let errors = []
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }
        let id = +req.params.id
        let freezer = []
        Freezer.findByPk(id)
        .then(freezer_data => {
            freezer = freezer_data;
            res.render('freezer_edit',{freezer, errors})
        })
        .catch(err => res.send(err))
    }

    static update(req, res){
        let obj = {
            namaIkan: req.body.namaIkan,
            stockIkan: req.body.stockIkan,
            pengepulOnlineId: 1,
        }
        let id = +req.params.id
        Freezer.update(obj, {
            where: {id}
        })
        .then(() => res.redirect('/freezer'))
        .catch(err => {
            let errors = err.errors.map(el => el.message)
            res.redirect(`/freezer/edit/${req.params.id}?msg=${errors}`)
        })
    }

    static delete(req, res){
        const id = +req.params.id
        Freezer.destroy({
            where:  {
            id: id 
            }
        })
        .then(() => res.redirect('/freezer'))
        .catch(err => res.send(err))
    }

    static index_nelayan_freezer(req, res) {
        const id = +req.params.id;
        Freezer.findOne({
          where: {id:id},
          include: {
            model: Nelayan
          }
        })
          .then(data => {
              console.log(data);
              res.render('nelayan_freezer', {data})
          })
          .catch(err => res.send(err));  
    }

    static add_nelayan(req, res) {
        let errors = []
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }
        const id = +req.params.id
        let nelayan 
        Nelayan.findAll()
        .then(data => {
            nelayan = data
            return Freezer.findByPk(id)
        })
        .then(freezer => {
            res.render('nelayan_freezer_add', {nelayan, errors, freezer})

        })
        .catch(err => res.send(err))
    }

    static insert_nelayan(req, res) {
      // console.log(req.body.namaIkan);
      const id = +req.params.id
      let obj = {
        nelayanId : req.body.nelayanId,
        freezerId : id
    }
    NelayanFreezer.create(obj)
    .then(() => res.redirect('/freezer'))
    .catch(err => {
        console.log(err);
        let errors = err.errors.map(el => el.message)
        // console.log(err.errors[0].message);
        res.redirect(`/freezer/add?msg=${errors}`)
    }) 
    }
}

module.exports = ControllerFreezer; 

