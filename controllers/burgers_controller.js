var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hdbrsObj = {
            burgers: data
        };
        res.render("index", hdbrsObj);
    });
});

router.post("api/burgers", function(req,res){
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function(result){
            res.json({id: result.insertId});
        }

    )
});

router.put("/api/burgers/:id", function(req, res){
    var iD = "id"
})