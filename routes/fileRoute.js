const express = require("express");
const router = express.Router();
const { handleUploadFile } = require("../contollers/fileController");
const upload = require("../utils/multerConfig");

router.post("/upload", upload.single("pdf"), handleUploadFile);

module.exports = router;
