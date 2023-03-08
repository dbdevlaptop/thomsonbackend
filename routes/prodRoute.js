const express = require("express");
const router = express.Router();
const prodCtrl = require("../controllers/prodController");
var jwt = require('jsonwebtoken');

var passport = require('passport');
require('../config/passport')(passport);

router.get("/",(req,res)=>{
    res.send("Hello prod ");
});

router.post('/category/add',prodCtrl.cateAdd);
router.get('/category/list',prodCtrl.cateList);
router.delete('/category/delete/:id',prodCtrl.cateDelete);

module.exports = router;