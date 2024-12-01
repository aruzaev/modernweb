const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory where the uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // File name pattern
  },
});

const upload = multer({ storage: fileStorage });

app.use(express.static(__dirname + "/public"));

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single image upload successful");
});

app.post("/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.files);
  res.send("Multiple image upload successful");
});

const fs = require("fs");
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
