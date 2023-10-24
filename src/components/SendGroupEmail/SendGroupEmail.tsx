import React, { useState, ChangeEvent } from "react";
import { Student } from "../../types/types";

interface SendGroupEmailProps {
  students: Student[];
  sendGroupEmail: (emails: string[]) => void;
}

export const SendGroupEmail = ({
  students,
  sendGroupEmail,
}: SendGroupEmailProps) => {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  const toggleSelectAll = (selectAll: boolean) => {
    if (selectAll) {
      const allStudentEmails = students.map((student) => student.email || "");
      setSelectedStudents(allStudentEmails);
    } else {
      setSelectedStudents([]);
    }
  };

  const handleStudentSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedStudents((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((email) => email !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your email submission logic here for selectedStudents
    console.log("Email submitted to:", selectedStudents);
    sendGroupEmail(selectedStudents);
    // Clear the email input and selected students
    setEmail("");
    setSelectedStudents([]);
  };

  return (
    <div>
      <h2>Skicka email till deltagare</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Markera alla
          <input
            type="checkbox"
            onChange={(e) => toggleSelectAll(e.target.checked)}
            checked={selectedStudents.length === students.length}
          />
        </label>
        <br />
        {students.map((student, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                value={student.email}
                onChange={handleStudentSelection}
                checked={selectedStudents.includes(student.email || "")}
              />
              {student.firstName} {student.lastName}
            </label>
          </div>
        ))}
        <br />
        <label>
          Ämnesrad:
          <input type="text" />
        </label>
        <br />
        <label>
          Meddelande:
          <textarea></textarea>
        </label>
        <br />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};
