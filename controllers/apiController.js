var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "streamchats",
});

export const addNewCustomer = (req, res) => {
  var newCustomer = req.body;
  var sql = `INSERT INTO customers (name, email) VALUES ('${newCustomer.name}', '${newCustomer.email}')`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`1 Record inserted ${result}`);
    res.json(result);
  });
};
export const addNewSaveMessage = (req, res) => {
  var newMessage = req.body;
  var sql = `INSERT INTO messages (message, name) VALUES ('${newMessage.name}','${newMessage.message}')`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`1 record inserted ${result}`);
    res.send("Ok");
  });
};

export const getSavedMessages = (req, res) => {
  var sql = `SELECT * FROM messages`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
