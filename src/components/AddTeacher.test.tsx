// AddTeacher.test.tsx
import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddTeacher } from "./AddTeacher";

describe("AddTeacher Component", () => {
  const mockAddTeacher = jest.fn();

  it("displays the 'Lägg till lärare' button with correct text", () => {
    render(<AddTeacher addTeacher={mockAddTeacher} />);

    const addButton = screen.getByText("Lägg till lärare");
    expect(addButton).toBeInTheDocument();
  });

  it("does not display modal content before clicking the button", () => {
    render(<AddTeacher addTeacher={mockAddTeacher} />);

    const modalHeader = screen.queryByTestId("create-teacher-modal");
    expect(modalHeader).not.toBeInTheDocument();
  });

  it("displays modal content after clicking the 'Lägg till lärare' button", () => {
    render(<AddTeacher addTeacher={mockAddTeacher} />);

    const addButton = screen.getByText("Lägg till lärare");
    userEvent.click(addButton);

    const modalHeader = screen.getByText("Lägg till lärare");
    expect(modalHeader).toBeInTheDocument();
  });

  it("calls the addTeacher function with correct values on submit", () => {
    render(<AddTeacher addTeacher={mockAddTeacher} />);

    const addButton = screen.getByText("Lägg till lärare");

    act(() => {
      userEvent.click(addButton);
    });

    const firstNameInput = screen.getByLabelText("Förnamn");
    const lastNameInput = screen.getByLabelText("Efternamn");
    const roleInput = screen.getByLabelText("Roll");
    const submitButton = screen.getByText("Spara");

    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(roleInput, "Teacher");

    userEvent.click(submitButton);

    expect(mockAddTeacher).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      role: "Teacher",
    });
  });

  it("resets input fields when cancel button is clicked", () => {
    render(<AddTeacher addTeacher={mockAddTeacher} />);

    const addButton = screen.getByText("Lägg till lärare");

    act(() => {
      userEvent.click(addButton);
    });

    userEvent.type(screen.getByLabelText("Förnamn"), "John");
    userEvent.type(screen.getByLabelText("Efternamn"), "Doe");
    userEvent.type(screen.getByLabelText("Roll"), "Teacher");

    userEvent.click(screen.getByText("Avbryt"));
    userEvent.click(addButton);

    expect(screen.getByLabelText("Förnamn")).toHaveValue("");
    expect(screen.getByLabelText("Efternamn")).toHaveValue("");
    expect(screen.getByLabelText("Roll")).toHaveValue("");
  });
});
