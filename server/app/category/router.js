var express = require('express');
var router = express.Router();
const { index, viewCreate, actionCreate, viewEdit, actionEdit, actionDelete } = require("./controller");

/* GET home page. */
router.get('/', index);

/* Create */
router.get('/create', viewCreate);
router.post('/create', actionCreate);

/* Edit */
router.get('/edit/:id', viewEdit);
router.put('/edit/:id', actionEdit);

// Delete
router.delete('/delete/:id', actionDelete);

module.exports = router;
