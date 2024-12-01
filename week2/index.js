const path = require("path");
const fs = require("fs");

console.log(path.basename(__dirname));

console.log(path.parse(__dirname));
//console.log(path.parse(__filename));

console.log(path.join(__dirname, "file", "index.html"));
/*
fs.mkdir(path.join(__dirname, "assets/new/one"), { recursive: true }, (err) => {
  if (err) { // if err not null or path exists
    console.log(err);
  }
});

fs.rm(path.join(__dirname, "assets"), { }, (err) => {
  if (err) {
    // if err not null or path exists
    console.log(err);
  }
}); */

const myCallback = (err) => {
  if (err) {
    // if err not null or path exists
    console.log(err);
  } else {
    console.log("nice");
  }
};

fs.mkdir(
  path.join(__dirname, "assets/new/one"),
  { recursive: true },
  myCallback
);

console.log("after");

fs.readFile(path.join(__dirname, "/file", "index.html"), (err, data) => {if (err) console.log(err); console.log(data);
