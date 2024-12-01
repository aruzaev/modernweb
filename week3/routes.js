const express = require("express");
const router = express.Router();

router.get("/index", (req, res) => {
  res.end("<h1>Hi</h1>");
});

router.get("/contact", (req, res) => {
  res.send("<h1>contact</h1>");
});

router.get("/flights/:from-:to", (req, res) => {
  const { from, to } = req.params;
  res.end(from + " to " + to);
});

router.get("/calculate/:a/add/:b", (req, res) => {
  const { a, b } = req.params;
  let answer = Number(a) + Number(b);
  return res.end(answer.toString());
});

router.get("/*", (req, res) => {
  res.send("<h1>404</h1>");
});

router.post("/register", (req, res) => {
  console.log(req.body);

  res.end("hiii");
});

module.exports = router;
