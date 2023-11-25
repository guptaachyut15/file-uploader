const express = require("express");
const multer = require("multer");
const { PORT } = require("./utils/config");
const fileRouter = require("./routes/fileRoute");
const staticRouter = require("./routes/staticRoute");

app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/file", fileRouter);
app.use("/", staticRouter);

app.listen(PORT, () => console.log("Listening on port", PORT));
