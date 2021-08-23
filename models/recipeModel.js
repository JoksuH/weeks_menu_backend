const mongoose = require('mongoose');

const recipe = mongoose.model('recipe', new mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    ImageUrl: {type: String, required: true},
    IngredientList: {type: [String], required: true},
    Instructions: {type: String, required: true},
    dateAdded: {type: Date, default: Date.now}
  }))
  

module.exports = recipe;
