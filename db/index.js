const mysql=require('mysql');
const mysqlConfig=require('./config');

const mysqlConn=mysql.createConnection(mysqlConfig);
mysqlConn.connect();

function insertDb(sql,params) {
    return new Promise((resolve,reject)=>{
        mysqlConn.query(sql,params,(err,result)=>{
            if(err){
                reject({
                    error:1,
                    msg:'数据插入失败'
                })
            }
            else{
                resolve({
                    error:0,
                    msg:'数据插入成功',
                    data:result
                })
            }
        })
    })
  };
function queryDb(sql) {
    return new Promise((resolve,reject)=>{
        mysqlConn.query(sql,(err,result)=>{
            if(err){
                reject({
                    error:1,
                    msg:'数据查询失败'
                })
            }
            else{
                resolve({
                    error:0,
                    msg:'数据查询成功',
                    data:result
                })
            }
        })
    });
  }

  module.exports={
      insertDb:insertDb,
      queryDb:queryDb
  }
