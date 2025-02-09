const express = require("express");

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port is open at ${PORT}`);
});
