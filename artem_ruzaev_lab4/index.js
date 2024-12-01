const express = require("express");
const multer = require("multer");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

const upload = multer();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("layout", {
    content: `
        <h1>Welcome</h1>
        <p>Use the following links:</p>
        <ul>
          <li><a href="/generate-image">Generate Image</a></li>
          <li><a href="/generate-qr-code">Generate QR Code</a></li>
        </ul>
      `,
  });
});

app.get("/generate-image", (req, res) => {
  res.render("generate-image", { imageUrl: null });
});

app.use(express.urlencoded({ extended: true }));

app.post("/generate-image", upload.none(), (req, res) => {
  console.log(req.body);
  const { height, width, blur, grayscale } = req.body;
  let url = `https://picsum.photos/${width}/${height}`;
  if (grayscale === "on") url += "?grayscale";
  if (blur) url += `${grayscale ? "&" : "?"}blur=${blur}`;
  console.log(`Generated Image URL: ${url}`);
  res.render("generate-image", { imageUrl: url });
});

app.get("/generate-qr-code", (req, res) => {
  res.render("generate-qr-code", { qrCodeUrl: null });
});

app.post("/generate-qr-code", upload.none(), (req, res) => {
  const { height, width, value } = req.body;
  const url = `https://image-charts.com/chart?chs=${width}x${height}&cht=qr&chl=${encodeURIComponent(
    value
  )}`;
  res.render("generate-qr-code", { qrCodeUrl: url });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
