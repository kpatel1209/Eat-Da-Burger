const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(burger_data) {
        console.log(JSON.parse(JSON.stringify(burger_data)));
        res.render("index", {burger_data});
    });
});

router.post("/burgers/create", function(req, res) {
    console.log(req.body);
    burger.create(req.body.burger_name, function(result) {
        res.redirect("/");
    })
});

router.post("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;