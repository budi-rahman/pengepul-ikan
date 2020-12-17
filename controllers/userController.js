const { Freezer, PengepulOnline, NelayanFreezer, Nelayan, User } = require('../models/index')

class ControllerUser {
   
    static index(req, res){
        User.findAll()
        .then(data => res.render('user',{data}))
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    }

    static add(req, res){
        let errors = []
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }
        res.render('user_add', {errors})
    }


    static insert(req, res){
        let obj = {
            role: req.body.role,
            username: req.body.username,
            password: req.body.password,

        }
        User.create(obj)
        .then(() => res.redirect('/user'))
        .catch(err => {
            let errors = err.errors.map(el => el.message)
            // console.log(err.errors[0].message);
            res.redirect(`/user/add?msg=${errors}`)
        })   
    }

    static edit(req, res){
        let errors = []
        if (req.query.msg) {
            errors = req.query.msg.split(',')
        }
        let id = +req.params.id
        let user = []
        User.findByPk(id)
        .then(user_data => {
            user = user_data;
            res.render('user_edit',{user, errors})
        })
        .catch(err => res.send(err))
    }

    static update(req, res){
        let obj = {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,

        }
        let id = +req.params.id
        User.update(obj, {
            where: {id}
        })
        .then(() => res.redirect('/user'))
        .catch(err => {
            let errors = err.errors.map(el => el.message)
            res.redirect(`/user/edit/${req.params.id}?msg=${errors}`)
        })
    }

    static delete(req, res){
        const id = +req.params.id
        User.destroy({
            where:  {
            id: id 
            }
        })
        .then(() => res.redirect('/user'))
        .catch(err => res.send(err))
    }

   
}

module.exports = ControllerUser; 

