const orm = require("../config/orm");

let burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
        })
    },
    
    create: function (name, callback) {
        orm.create("burgers", name, callback, function(res) {
            callback(res);
        });
    },

    update: function(id, callback) {
        orm.update("burgers", id, callback, function(res) {
            callback(res);
        });
    },
};

module.exports = burger;