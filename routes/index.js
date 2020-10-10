var express = require('express');
var router = express.Router();
const {insertDb,queryDb} = require('../db/index');

/* GET home page. */
router.get('/index', async function(req, res, next) {
  let sql=`select * from bookinfo`;
  let results=await queryDb(sql);
  let sql1=`select id,pageId,title from bookdesc where bookId=1001 `;
  let results1=await queryDb(sql1);
  let chapterList=results1.data;
  results.data[0].chapterList=chapterList;
  // console.log(results.data);
  res.send(results);
});





module.exports = router;
