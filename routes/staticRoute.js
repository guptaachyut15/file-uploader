const express = require("express");
const router = express.Router();
const { handleHomepage } = require("../contollers/staticController");

router.get("/", handleHomepage);

module.exports = router;
