const express = require("express");
const cors = require("cors");
//const bodyParser = require("body-parser");
const app = express();
// no need to use if we don't have the file data
const multer = require("multer");
const upload = multer();

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// for parsing multipart/form-data
app.use(upload.array());
app.post("/formDemo", (req, res) => {
  console.log(req.body);
  res.send("recieved your form!");
});

// create a server
app.listen(8000, () => console.log("My server is running on port 8000"));
