const route = require("express").Router();
const  controler = require("../Controller/user.controller")
route.get("/",controler.user)
route.get("/search",controler.fiterUser)
route.get("/:uuid",controler.filterByGender)

module.exports = route 