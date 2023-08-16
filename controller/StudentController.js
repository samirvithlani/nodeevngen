const studentSchema = require("../model/StudentModel");

const getStudents = async (req, res) => {

  const students = await studentSchema.find();
  if (students) {
    res.status(200).json({
      message: "Students fetched successfully",
      data: students,
    });
  }

  else{
    res.status(500).json({
      message: "Students not fetched",
    });
  }
}
const addStudent = async (req, res) => {
  try {
    const student = new studentSchema(req.body);
    const studentres = await student.save();
    if (studentres) {
      res.status(200).json({
        message: "Student added successfully",
        data: studentres,
      });
    } else {
      res.status(500).json({
        message: "Student not added",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
    addStudent,
    getStudents
}