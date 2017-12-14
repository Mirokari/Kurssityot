var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "a16mkari",
password: "kaka123"
});

con.connect(function(err) {
if (err) throw err;
console.log("Yhdistetty!");
});