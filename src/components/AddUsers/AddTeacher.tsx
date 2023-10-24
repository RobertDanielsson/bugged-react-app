import React, { useState } from "react";
import { Teacher } from "../../types/types";

interface AddTeacherProps {
  addTeacher: (teacher: Teacher) => void;
}

export const AddTeacher = ({ addTeacher }: AddTeacherProps) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  const handleAddTeacher = (event: React.FormEvent) => {
    event.preventDefault();

    const newTeacher = {
      firstName,
      lastName,
      role,
    };

    addTeacher(newTeacher);

    setFirstName("");
    setLastName("");
    setRole("");

    setDisplayModal(false);
  };

  return (
    <>
      <button onClick={() => setDisplayModal(true)}>Lägg till lärare</button>
      {displayModal && (
        <div className="modal-container" data-testid="create-teacher-modal">
          <div className="modal">
            <div className="modal-header">
              <h2>Lägg till lärare :-)</h2>
            </div>
            <form onSubmit={handleAddTeacher}>
              <div className="input-group">
                <label htmlFor="firstName">Förnamn</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Efternamn</label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="role">Roll</label>
                <input
                  id="role"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <button type="submit">Spara</button>
              <button type="button" onClick={() => setDisplayModal(false)}>
                Avbryt
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
