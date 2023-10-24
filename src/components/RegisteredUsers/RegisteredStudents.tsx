import React from "react";
import {
  getFullName,
  getTotalAge,
  getTotalRegistered,
} from "../../helpers/helpers";

interface RegisteredStudentsProps {
  registeredStudents: any[];
}

export const RegisteredStudents = ({
  registeredStudents,
}: RegisteredStudentsProps) => {
  //TODO: Show email if it exists
  //TODO: Implement functionality to remove registered students

  return (
    <div>
      <h2>Anmälda:</h2>
      <div className="registered-users">
        {registeredStudents.map((student, index) => (
          <div key={index}>
            <img
              className="profile-picture"
              src={`https://source.unsplash.com/random/500x500/?profile&v=${
                student.firstName + student.lastName + student.age
              }`}
              alt={""}
            />
            <p>Namn: {getFullName(student)}</p>
            <p>Ålder: {student.agee}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Totalt anmälda: {getTotalRegistered(registeredStudents)}</h2>
        <h2>Totala ålder på deltagare: {getTotalAge(registeredStudents)}</h2>
      </div>
    </div>
  );
};
