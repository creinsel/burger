var connection = require("../config/connection.js");

function createQmarks(num){
    var arr=[];

    for (var i = 0; i < num; i++) {
        if (process.env.NODE_ENV === 'production') {
            arr.push("$" + (arr.length + 1));
        } else {
            arr.push("?");
        }
        
    }
    return arr.toString();
};

function translateSql(obj){
    var arr=[];

    for(var key in obj){

        var value = obj[key];
        if(Object.hasOwnProperty.call(obj, key)){
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
        var queryStr = "SELECT * FROM "+ table + ";";

        connection.query(queryStr, function(err, res){
            console.log('queryStr', queryStr);
            if (err){
                throw err;
            }
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb){
        var queryStr= "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ")";

        connection.query(queryStr, vals, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, objColVals, condition, cb){
        var queryStr = "UPDATE " + table + " SET " + translateSql(objColVals) + 
        " WHERE " + condition;

        connection.query(queryStr, function(err,res){
            if (err){
                throw err;
            }
            cb(res);
        });
    }
}

module.exports = orm;