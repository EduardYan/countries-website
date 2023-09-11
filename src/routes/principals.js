//Routes principals
const { Router } = require("express");

const router = Router();

//pass the page name in each route
let pageName = "";

router.get("/", (req, res) => {
  pageName = "home";
  return res.render("home", { variable: pageName });
});

router.get("/view", (req, res) => {
  pageName = "view";
  return res.render("view", { variable: pageName });
});

router.get("/search", (req, res) => {
  console.log(req.query.search);
  return res.send("Search");
});

module.exports = router;
