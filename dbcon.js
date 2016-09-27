var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'mysql.eecs.oregonstate.edu',
  user            : 'cs290_beyerda',
  password        : '9724',
  database        : 'cs290_beyerda'
});

module.exports.pool = pool;
