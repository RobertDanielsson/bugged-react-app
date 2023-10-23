import { AddTeacher } from "./AddTeacher";
import { AddStudent } from "./AddStudent";
import React, { useState } from "react";
import { RegisteredStudents } from "./RegisteredStudents";
import { RegisteredTeachers } from "./RegisteredTeachers";
import { Student, Teacher } from "../types/types";

export const TechEvoRegister = () => {
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [registeredTeachers, setRegisteredTeachers] = useState([]);

  const handleAddTeacher = (teacher) => {
    setRegisteredTeachers([...registeredStudents, teacher]);
  };

  const handleAddStudent = (student) => {
    setRegisteredStudents([...registeredStudents, student]);
  };

  return (
    <div className="container">
      <div className="registration-wrapper">
        <h1>Tech evo registrering</h1>
        <section className="user-section">
          <AddStudent addStudent={handleAddStudent} />
          <RegisteredStudents registeredStudents={registeredStudents} />
        </section>
        <hr />
        <section className="user-section">
          <AddTeacher addTeacher={handleAddTeacher} />
          <RegisteredTeachers teachers={registeredTeachers} />
        </section>
      </div>
    </div>
  );
};
