var express = require('express')
var router = express.Router()
const menuModel = require('./../models/menuModel')

/* post a menu recipe */
router.post('/addmenu', function (req, res, next) {
    const menu = new menuModel({
        Recipes: req.body.recipes,
    })

    menu.save((err) => {
        if (err) throw err
        res.send('Menu Saved')
    })
})

//Get all menus

router.get('/', function (req, res, next) {
    menuModel
        .find()
        .populate('Recipes')
        .sort('-dateAdded')
        .exec((err, recipes) => {
            if (err) throw err
            res.send(JSON.stringify(recipes))
        })
})

router.delete('/:menuID', function (req, res, next) {
    menuModel.deleteOne({ _id: req.params.menuID }).exec((err, result) => {
        if (err) throw err
        res.send(`Menu with the id ${req.params.menuID} deleted`)
    })
})

module.exports = router
