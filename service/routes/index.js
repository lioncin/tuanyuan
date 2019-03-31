var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var addSql = 'INSERT INTO CM_USER(WECHAT_ID,NAME,GENDER,HOME,COMPANY,BIRTHDAY,RUTUAN,PHOTO_URL,CREATED_AT,CREATED_BY) VALUES(?,?,?,?,?,?,?,?,NOW(),1)';
  var addSqlParams = [];
  for(var key in req.query){
    if(key=='wechat'){
      addSqlParams.push(req.query[key]);
    }
    if(key=='name'){
      addSqlParams.push(req.query[key]);
    }
    if(key=='gender'){
      addSqlParams.push(req.query[key]);
    }
    if(key=='home'){
      addSqlParams.push(req.query[key]);
    }
    if(key=='company'){
      addSqlParams.push(req.query[key]);
    }
    if(key=='birthday'){
      addSqlParams.push(req.query[key]);
    }
    if(key=='rutuan'){
      addSqlParams.push(req.query[key]);
    }
    if(key=='photo'){
      addSqlParams.push(req.query[key]);
    }
  }
  
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'tuanyuanzheng'
  });
  connection.connect();

  console.log(addSqlParams);
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      return;
    }        
 
  console.log('--------------------------INSERT----------------------------');
  console.log('INSERT ID:',result);        
  console.log('-----------------------------------------------------------------\n\n');  
});
  connection.end();
  res.render('index', { title: 'Express' });
});

module.exports = router;
