var express = require('express');
var router = express.Router();
var Ski = require('../models').Ski;

/* GET ski brands
  GET /skiing_dev
  */
router.get('/', function(req, res) {
  Ski.all(
    {
      order: [
        ['createdAt', 'ASC']
      ]
    }
  )
    .then( function(skiing) {
      res.render('skiing', { skiing: skiing })
    })
})

/*GET /skiing/edit */
router.get('/:id/edit', function(req, res) {
  Ski.findById(req.params.id)
    .then( function(ski) {
      return res.render('edit', { ski: ski })
    })
})

/*PUT /skiing */
router.put('/:id', function(req, res) {
  Ski.update(
    { brand: req.body.brand},
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/skiing')
  })
})

/*POST /skiing */
router.post('/', function(req, res) {
  var brand = req.body.brand;
  Ski.create({ brand: req.body.brand })
    .then( function() {
      res.redirect('/skiing')
    })
})

/* DELETE /skiing/1 */
router.delete('/:id', function(req, res) {
  Ski.findById(req.params.id)
    .then( function(ski){
      ski.destroy();
      return res.redirect('/skiing')
    })
})

module.exports = router;
