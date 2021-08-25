var express = require('express')
var router = express.Router()
const menuModel = require('./../models/menuModel')

/* post a new recipe */
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
        .populate('recipe')
        .sort('-dateAdded')
        .exec((err, recipes) => {
            if (err) throw err
            res.send(JSON.stringify(recipes))
        })
})

module.exports = router
