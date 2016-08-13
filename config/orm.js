var connection = require('../config/connection.js');

var orm = {
  selectAll: function(tableInput, cb){
    var s = 'SELECT * FROM ' + tableInput + ';';
    connection.query(s, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  newBurger: function(tableInput, cb){
    var s = "INSERT INTO" + tableInput + "(about_a_burger) VALUES (?)";
    connection.query(s, function(err, result){
      if (err) throw err;
      cb(result);
    });
  },

  devourBurger: function(tableInput, cb){
    var s = "UPDATE" + tableInput + "SET devoured = TRUE WHERE id =?";
    connection.query(s, function(err, result){
      if (err) throw err;
      cb(result);
    });
  }
}
    
module.exports = orm;