// Artem Ruzaev
// Lab 2

const express = require("express");
const app = express();
const router = require("./routes");

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Open your browser at localhost:${port}`);
});
