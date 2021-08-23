var express = require('express');
var router = express.Router();
const recipeModel = require("./../models/recipeModel");


/* GET users listing. */
router.post('/addrecipe', function(req, res, next) {
  const recipe = new recipeModel({
    Title: req.body.title,
    Description: req.body.description,
    ImageUrl: req.body.imgurl,
    IngredientList: req.body.ingredients,
    Instructions: req.body.instructions,
  });

  recipe.save(err => {
      if (err) throw err;
      res.send('Recipe Saved')
    });
});

module.exports = router;
