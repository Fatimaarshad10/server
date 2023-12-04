const express = require("express");
const Student = require('../model/studentSchema')
const studentRoute = express.Router();

studentRoute.get('/', async (req, res) => {
  try {
    const student = await Student.find({})
    res.status(200).json(student);
  } catch (error) {
    res.json(error)
  }
});


studentRoute.post('/', async (req, res) => {
  try {
    const { studentName, age, rollNo } = req.body;

    const createStudent = new Student({
      studentName, age, rollNo
    });
    const data = await createStudent.save();
    res.json(data)

  } catch (error) {
    res.json(error)
  }

});
studentRoute.patch('/:id', async (req, res) => {
  try {
    const studentId = req.params.id
    const { studentName, age, rollNo } = req.body

    const studentUpdate = await Student.findByIdAndUpdate(studentId, { studentName, age, rollNo }, { new: true })
    res.json(studentUpdate)

  } catch (error) {
    res.json(error)
  }
});

studentRoute.delete('/:id', async (req, res) => {
  try {
    const studentId = req.params.id

    await Student.findByIdAndDelete(studentId)

    res.json('Student is deleted')

  }
  catch (error) {
    res.json(error)
  }
});



module.exports = studentRoute;