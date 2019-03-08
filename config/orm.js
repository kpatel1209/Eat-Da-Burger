const connection = require("./connection");

let orm = {
    all: function(tableInput, callback) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    },

    create: function(tableInput, value, callback) {
        connection.query("INSERT INTO " + tableInput + "(burger_name) VALUES ('"+value+"');", function(err, result) {
            if(err) {
                throw error;
            }
            callback(result);
        });
    },
    
    update: function(tableInput, value, callback) {
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + value + ";", function(err, result) {
            if(err) {
                throw error;
            }
            callback(result);
        });
    }    
}

// Export the orm object for the model
module.exports = orm;