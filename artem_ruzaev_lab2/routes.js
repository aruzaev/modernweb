const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("Artem Ruzaev");
});

router.get("/greeting", (req, res) => {
  res.end("Artem Ruzaev - n01497403");
});

router.get("/add/:a+:b", (req, res) => {
  const { a, b } = req.params;
  const sum = Number(a) + Number(b);
  return res.end(sum.toString());
});

router.get("/calculate/:a/:operator/:b", (req, res) => {
  const { a, b, operator } = req.params;
  let numberA = Number(a);
  let numberB = Number(b);

  let answer;

  switch (operator) {
    case "+":
      answer = numberA + numberB;
      break;
    case "-":
      answer = numberA - numberB;
      break;
    case "*":
      answer = numberA * numberB;
      break;
    case "/":
      answer = numberA / numberB;
      break;
    case "**":
      answer = numberA ** numberB;
      break;
    default:
      return res.end("Invalid Operator");
  }

  res.end(answer.toString());
});

module.exports = router;
