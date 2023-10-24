import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Student } from "../../types/types";
import { SendGroupEmail } from "./SendGroupEmail";

const students: Student[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    age: "25",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    age: "25",
  },
];

describe("SendGroupEmail component functionality", () => {
  it("allows selecting all students", () => {
    const onEmailSend = jest.fn();
    render(<SendGroupEmail students={students} sendGroupEmail={onEmailSend} />);

    // Verify that the "Select All" checkbox is present and unchecked by default
    const selectAllCheckbox = screen
      .getByText("Markera alla")
      .querySelector("input") as HTMLInputElement;

    expect(selectAllCheckbox).toBeInTheDocument();
    expect(selectAllCheckbox).not.toBeChecked();

    // Check the "Select All" checkbox
    fireEvent.click(selectAllCheckbox);
    expect(selectAllCheckbox).toBeChecked();

    // Verify that all students are selected
    students.forEach((student) => {
      const studentCheckbox = screen.getByDisplayValue(student.email!);
      expect(studentCheckbox).toBeChecked();
    });
  });

  it("allows deselecting all students", () => {
    //TODO: Add test
    expect(1).toBe(2);
  });

  it("sends email to selected student", () => {
    const onEmailSend = jest.fn();
    render(<SendGroupEmail students={students} sendGroupEmail={onEmailSend} />);

    // Check a student, fill in the subject and message fields, and submit the form
    const johnDoeCheckbox = screen.getByDisplayValue("john.doe@example.com");
    fireEvent.click(johnDoeCheckbox);
    const subjectInput = screen.getByLabelText("Ämnesrad:");
    const messageInput = screen.getByLabelText("Meddelande:");
    fireEvent.change(subjectInput, { target: { value: "Subject" } });
    fireEvent.change(messageInput, { target: { value: "Message" } });
    fireEvent.click(screen.getByText("Skicka"));

    // Verify that the onEmailSend function was called with the selected student's email
    expect(onEmailSend).toHaveBeenCalledWith(["john.doe@example.com"]);

    // Verify that the form fields are cleared
    expect(johnDoeCheckbox).not.toBeChecked();
    expect(subjectInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });
});
