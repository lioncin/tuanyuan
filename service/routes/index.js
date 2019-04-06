var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mysql = require('mysql');
var mysqlParams = {
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'tuanyuanzheng'
};

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/user',urlencodedParser, function(req, res, next){
  var addSql = 'INSERT INTO CM_USER(WECHAT_ID,NAME,GENDER,HOME,COMPANY,BIRTHDAY,RUTUAN,PHOTO_URL,CREATED_AT,CREATED_BY) VALUES(?,?,?,?,?,?,?,?,NOW(),1)';
  var addSqlParams = [];
  for(var key in req.body){
    if(key=='id'){
      addSqlParams.push(req.body[key]);
    }
    if(key=='name'){
      addSqlParams.push(req.body[key]);
    }
    if(key=='gender'){
      addSqlParams.push(req.body[key]);
    }
    if(key=='home'){
      addSqlParams.push(req.body[key]);
    }
    if(key=='company'){
      addSqlParams.push(req.body[key]);
    }
    if(key=='birthday'){
      addSqlParams.push(req.body[key]);
    }
    if(key=='rutuan'){
      addSqlParams.push(req.body[key]);
    }
    if(key=='photo'){
      addSqlParams.push(req.body[key]);
    }
  }

  var connection = mysql.createConnection(mysqlParams);
  connection.connect();
  console.log(addSqlParams);
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      return;
    }
  });
  connection.end();
  res.render('index', { title: 'Express' });
});

//get user info
router.get('/user/:id', function(req, res, next){
  const id = req.params.id;
  if(id){
    const sql = 'SELECT * FROM cm_user WHERE wechat_id='+id;
    var connection = mysql.createConnection(mysqlParams);
    connection.query(sql,function (err, result) {
      res.send(result);
    });
    connection.end();
  }else{
    res.send('error');
  }
});

//save user info
// router.post('/user',urlencodedParser, function(req, res, next){
//   const body = req.body;
//   res.send(req.body);
// });

//upload user photo
router.post('/user/photo', function(req, res, next){

});


router.get('/list', function(req, res, next){
  let data = [];
  res.render('list', { data: data });
});

module.exports = router;
