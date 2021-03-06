var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){

    burger.selectAll(function(data){
        var hdbrsObj = {
            burgers: data
        };
        res.render("index", hdbrsObj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function(result){
            res.json({id: result.insertId});
        }

    )
});

router.put("/api/burgers/:id", function(req, res){
    var iD = "id = " + req.params.id;

    burger.updateOne({devoured: !!req.body.devoured}, iD, function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

module.exports = router;