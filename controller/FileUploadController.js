const multer = require("multer");
const googleController = require("./GoogleController");

const storage = multer.diskStorage({
  // destination: function(req, file, cb) {
  //     cb(null, 'uploads')
  // }
  //destination: "uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
}).single("file");

const uploadFilel = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      const id = await googleController.uploadFile(req.file.path);
      console.log(id);
      return res
        .status(200)
        .json({
          message: "File uploaded successfully",
          file: req.file.originalname,
        });
    }
  });
};
const getFilesFromDrive = async (req, res) => {
  const files = await googleController.getAllFileFromGoogleDrive();
  return res
    .status(200)
    .json({ files: files });
};
module.exports = { uploadFilel,getFilesFromDrive };
