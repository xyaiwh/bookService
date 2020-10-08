var express = require('express');
var router = express.Router();
const {insertDb,queryDb} = require('../db/index');

/* GET home page. */
router.get('/index', async function(req, res, next) {
  let sql=`select * from bookinfo`;
  let results=await queryDb(sql);
  res.send(results);
});



module.exports = router;
