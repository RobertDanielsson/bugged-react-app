import React from "react";
import { getFullName } from "../../helpers/helpers";

export const RegisteredTeachers = ({ teachers }) => {
  return (
    <div>
      <h2>Lärare:</h2>
      <div className="registered-users">
        {teachers.map((teacher, i) => (
          <div key={i}>
            <img
              className="profile-picture"
              src={`https://source.unsplash.com/random/500x500/?profile&v=${
                teacher.firstName + teacher.lastName + teacher.role
              }`}
              alt={""}
            />
            <p>Namn: {getFullName(teacher)}</p>
            <p>Roll: {teacher.roll}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
