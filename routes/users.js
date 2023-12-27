var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(db.findUsers());
});

router.get('/:id', (req, res)=>{
  res.json(db.findUser(req.params.id));
})

router.post('/', (req, res)=>{
  res.status(201).json(db.insertUser(req.body));
})

router.delete('/:id', (req, res)=>{
  res.json(db.deleteUser(req.params.id));
})

router.put('/:id', (req, res)=>{
  let id = req.params.id;
  let user = req.body;
  res.json(db.updateUser(id, user));
})

module.exports = router;
