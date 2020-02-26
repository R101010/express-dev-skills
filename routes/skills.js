var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');


router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);


// show route
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update)


// parameter we're defining called id
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id', skillsCtrl.show);


module.exports = router;

