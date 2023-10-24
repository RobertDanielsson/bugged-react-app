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
      <div>
        <div className="registered-users">
          {registeredStudents.map((user) => (
            <div>
              <img
                className="profile-picture"
                src={`https://source.unsplash.com/random/500x500/?profile&v=${user.firstName}`}
                alt={""}
              />
              <p>Namn: {getFullName(user)}</p>
              <p>Ålder: {user.agee}</p>
            </div>
          ))}
        </div>
        <div>
          <h2>Totalt anmälda: {getTotalRegistered(registeredStudents)}</h2>
          <h2>Totala ålder på deltagare: {getTotalAge(registeredStudents)}</h2>
        </div>
      </div>
    </div>
  );
};
