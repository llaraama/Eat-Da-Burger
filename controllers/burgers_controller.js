var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectALL(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/", function(req, res) {
    burger.create([
      "name","devoured"
    ], [
        req.body.name, 0
    ], function(result) {
      // Send back the ID of the new quote
      res.redirect("/")
    });
  });
  
  router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devour
    }, condition, function() {
      res.redirect("/")
   
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  