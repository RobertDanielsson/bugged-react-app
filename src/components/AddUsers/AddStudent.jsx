import React, { useState } from "react";

export const AddStudent = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  //TODO: Add email to registration

  const handleAddStudent = (event) => {
    event.preventDefault();

    const newStudent = {
      firstName,
      lastName,
      age: age,
    };

    props.addStudent(newStudent);

    setFirstName("");
    setLastName("");
    setAge("");

    setDisplayModal(false);
  };

  return (
    <>
      <button onClick={() => setDisplayModal(true)}>Lägg till deltagare</button>
      {displayModal && (
        <div className="modal-container" data-testid="create-student-modal">
          <div className="modal">
            <div className="modal-header">
              <h2>Lägg till deltagare :-)</h2>
            </div>
            <form onSubmit={handleAddStudent}>
              <div className="input-group">
                <label htmlFor="firstName">Förnamn</label>
                <input
                  required
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Efternamn</label>
                <input
                  required
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="age">Ålder</label>
                <input
                  required
                  id="age"
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
