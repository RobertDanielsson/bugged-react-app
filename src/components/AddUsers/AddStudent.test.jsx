import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddStudent } from "./AddStudent";

describe("AddStudent Component", () => {
  const mockAddStudent = jest.fn();

  it("displays the 'Lägg till deltagare' button with correct text", () => {
    render(<AddStudent addStudent={mockAddStudent} />);

    const addButton = screen.getByText("Lägg till deltagare");
    expect(addButton).toBeInTheDocument();
  });

  it("does not display modal content before clicking the button", () => {
    render(<AddStudent addStudent={mockAddStudent} />);

    const modalHeader = screen.queryByTestId("create-student-modal");
    expect(modalHeader).not.toBeInTheDocument();
  });

  it("displays modal content after clicking the 'Lägg till deltagare' button", () => {
    render(<AddStudent addStudent={mockAddStudent} />);

    const addButton = screen.getByText("Lägg till deltagare");

    act(() => {
      userEvent.click(addButton);
    });

    const modalHeader = screen.getByText("Lägg till deltagare :-)");
    expect(modalHeader).toBeInTheDocument();
  });

  it("calls the addStudent function with correct values on submit", () => {
    render(<AddStudent addStudent={mockAddStudent} />);

    const addButton = screen.getByText("Lägg till deltagare");

    act(() => {
      userEvent.click(addButton);
    });

    userEvent.type(screen.getByLabelText("Förnamn"), "John");
    userEvent.type(screen.getByLabelText("Efternamn"), "Doe");
    userEvent.type(screen.getByLabelText("Ålder"), "25");

    userEvent.click(screen.getByText("Spara"));

    expect(mockAddStudent).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      age: "25",
    });
  });

  it("resets input fields when cancel button is clicked", () => {
    render(<AddStudent addStudent={mockAddStudent} />);

    const addButton = screen.getByText("Lägg till deltagare");

    act(() => {
      userEvent.click(addButton);
    });

    userEvent.type(screen.getByLabelText("Förnamn"), "John");
    userEvent.type(screen.getByLabelText("Efternamn"), "Doe");
    userEvent.type(screen.getByLabelText("Ålder"), "25");

    userEvent.click(screen.getByText("Avbryt"));
    userEvent.click(addButton);

    expect(screen.getByLabelText("Förnamn")).toHaveValue("");
    expect(screen.getByLabelText("Efternamn")).toHaveValue("");
    expect(screen.getByLabelText("Ålder")).toHaveValue("");
  });
});
