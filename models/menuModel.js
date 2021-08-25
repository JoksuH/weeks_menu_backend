const mongoose = require('mongoose')

const menu = mongoose.model(
    'menu',
    new mongoose.Schema({
        Recipes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'recipe',
            required: true
        }],
        dateAdded: { type: Date, default: Date.now },
    })
)

module.exports = menu
