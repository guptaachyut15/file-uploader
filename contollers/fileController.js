exports.handleUploadFile = async (req, res) => {
  try {
    return res.render("pages/homepage", { filename: req.file.originalname });
  } catch (err) {
    console.log("Error in uploading file", err);
    return res.render("pages/homepage", { error: true });
  }
};
