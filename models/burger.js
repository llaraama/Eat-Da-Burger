var orm = require("../config/orm.js");

var burger = {
    selectALL: function(cb) {
      orm.selectALL("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols,vals,cb) {
      orm.create("burgers", cols,vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  



module.exports = burger;