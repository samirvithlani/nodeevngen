const router = require('express').Router();
const studentController = require('../controller/StudentController');
const studentValidationSchema = require('../util/StudentValidationSchema');
const zodMiddleware = require('../util/ZodMiddleware');

router.post('/add', zodMiddleware.validate(studentValidationSchema), studentController.addStudent);
router.get('/get', studentController.getStudents);


module.exports = router;