var express = require('express');
var bodyParser=require('body-parser');
var router = express.Router();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function(req,res,next){
  let {id,name,age}=req.body;
  // let url=req.url;
  console.log(id,name,age);
  res.send('this is register page')
})

module.exports = router;
