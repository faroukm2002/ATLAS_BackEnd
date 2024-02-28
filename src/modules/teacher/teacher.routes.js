import express from 'express';
import *as teacher from './teacher.controller.js';

const teacherRouter=express.Router();



teacherRouter.route('/')
.post(teacher.addTeacher)
.get(teacher.getAllteachers)

// teacherRouter.get('/profile',teacher.GetTeacherProfile)
teacherRouter.route('/:id')
.get(teacher.getTeacherByID)
.put(teacher.updateTeacher)
.delete(teacher.deleteTeacher)

export default teacherRouter