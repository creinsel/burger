var connection = require("../config/connection.js");

function createQmarks(num){
    var arr=[];

    for (var i = 0; i < num; i++) {
        arr.push("?")
        
    }
    return arr.toString();
};

function translateSql(obj){
    var arr=[];

    for(var key in obj){

        var value = obj[key];
        if(Object.hasOwnProperty.call(ob,key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }   
    return arr.toString();
};


var orm = {
    selectAll: function(table, cb){
        var queryStr = "SELECT * FROM"+ table + ";";

        connection.query(queryStr, function(err,result){
            if (err){
                console.log("ERROR!");
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb){
        var queryStr= "INSERT INTO" + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ")";

        connection.query(queryStr,vals, function(err,result){
            if (err){
                console.log("ERROR!");
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb){
        var queryStr = "UPDATE " + table + " SET " + translateSql(objColVals) + 
        " WHERE " + condition;

        connection.query(queryStr,vals, function(err,result){
            if (err){
                console.log("ERROR!");
                throw err;
            }
            cb(result);
        });
    }
}