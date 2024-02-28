import express from 'express';
import *as subject from './subject.controller.js';

const subjectRouter=express.Router();



subjectRouter.route('/')
.post(subject.addSubject)
.get(subject.getAllsubject)


subjectRouter.route('/:id')
.get(subject.getSubjectByID)
.put(subject.updateSubject)
.delete(subject.deleteSubject)

export default subjectRouter