var connection = require("../config/connection.js");

var orm = {
    selectAll: function(col,table){
        var queryStr = "SELECT ? FROM ??";

        connection.query(queryStr, [col,table], function(err,result){
            if (err){
                console.log("ERROR: ", err);
            }
        })
    },

    insertOne: function(){
        //more stuff here
    },

    updateOne: function(){
        //put things here
    }
}