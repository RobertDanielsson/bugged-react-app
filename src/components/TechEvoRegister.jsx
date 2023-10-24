import React, { useState } from "react";
import { AddStudent } from "./AddUsers/AddStudent";
import { RegisteredStudents } from "./RegisteredUsers/RegisteredStudents";
import { AddTeacher } from "./AddUsers/AddTeacher";
import { RegisteredTeachers } from "./RegisteredUsers/RegisteredTeachers";
import { SendGroupEmail } from "./SendGroupEmail/SendGroupEmail";

export const TechEvoRegister = () => {
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [registeredTeachers, setRegisteredTeachers] = useState([]);

  const handleAddTeacher = (teacher) => {
    setRegisteredTeachers([...registeredStudents, teacher]);
  };

  const handleAddStudent = (student) => {
    setRegisteredStudents([...registeredStudents, student]);
  };

  const handleSendGroupEmail = (emails) => {
    console.log(emails);
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
        <section>
          <SendGroupEmail
            students={registeredStudents}
            sendGroupEmail={handleSendGroupEmail}
          />
        </section>
      </div>
    </div>
  );
};
