import React from "react";
import { getFullName } from "../helpers/helpers";

export const RegisteredTeachers = ({ teachers }) => {
  return (
    <div>
      <h2>Lärare:</h2>
      <div>
        {teachers.map((teacher) => (
          <div>
            <p>Namn: {getFullName(teacher)}</p>
            <p>Roll: {teacher.roll}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
