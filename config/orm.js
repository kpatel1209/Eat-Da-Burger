const connection = require("./connection");

let orm = {
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " +tableInput+ ";", function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    update: function(tableInput, cb) {
        connection.query("UPDATE " +tableInput+ " SET devoured=true WHERE id=" +condition+ ";", function(err, result) {
            if(err) throw error;
            cb(result);
        });
    }
}

// Export the orm object for the model
module.exports = orm;