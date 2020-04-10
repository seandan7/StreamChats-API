var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "streamchats",
});

export const addNewCustomer = (req, res) => {
  var newCustomer = req.body;
  var sql = `INSERT INTO customers (name) VALUES ('${newCustomer.name}')`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`1 Record inserted ${result}`);
    res.send("Ok");
  });
};
