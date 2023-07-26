const router = require('express').Router();
const roleController = require('../controller/RoleController');
router.post('',roleController.createRole)
module.exports = router;
