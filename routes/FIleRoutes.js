const router = require('express').Router();
const fileController = require('../controller/FileUploadController');

router.post('/upload', fileController.uploadFilel);
router.get('/getFiles', fileController.getFilesFromDrive);
module.exports = router;