const connection = require("./connection");

let orm = {
    all: function(tableInput, callback) {
        connection.query("SELECT * FROM " +tableInput+ ";", function(err, result) {
            if(err) throw err;
            callback(result);
        });
    },
    
    update: function(tableInput, condition, callback) {
        connection.query("UPDATE " +tableInput+ " SET devoured=true WHERE id=" +condition+ ";", function(err, result) {
            if(err) throw error;
            callback(result);
        });
    },

    create: function(tableInput, val, callback) {
        connection.query("INSERT INTO " +tableInput+ "(burger_name) VALUES ('"+val+"');", function(err, result) {
            if(err) throw error;
            callback(result);
        })
    }
}

// Export the orm object for the model
module.exports = orm;