var orm = require("../config/orm.js");

var burger = {
    selectALL: function(cb) {
      orm.selectALL("burgers", function(res) {
        cb(res);
      });
    },
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