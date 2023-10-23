import React from "react";
import { render, screen } from "@testing-library/react";
import { RegisteredStudents } from "./RegisteredStudents";
import { getTotalAge } from "../../helpers/helpers";

const mockRegisteredStudents = [
  {
    firstName: "John",
    lastName: "Doe",
    age: "25",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: "30",
  },
];

describe("RegisteredStudents Component", () => {
  it("displays the 'Anmälda' title", () => {
    render(<RegisteredStudents registeredStudents={mockRegisteredStudents} />);
    const title = screen.getByText("Anmälda:");
    expect(title).toBeInTheDocument();
  });

  it("displays registered students with correct names and ages", () => {
    render(<RegisteredStudents registeredStudents={mockRegisteredStudents} />);

    const studentNames = screen.getAllByText(/Namn:/);
    const studentAges = screen.getAllByText(/Ålder:/);

    expect(studentNames).toHaveLength(2);
    expect(studentAges).toHaveLength(2);

    expect(studentNames[0]).toHaveTextContent("Namn: John Doe");
    expect(studentAges[0]).toHaveTextContent("Ålder: 25");

    expect(studentNames[1]).toHaveTextContent("Namn: Jane Smith");
    expect(studentAges[1]).toHaveTextContent("Ålder: 30");

    //TODO: Verify that email is shown if registered
  });

  it("displays the total number of registered students", () => {
    render(<RegisteredStudents registeredStudents={mockRegisteredStudents} />);
    const totalRegisteredStudents = screen.getByText(/Totalt anmälda:/);
    expect(totalRegisteredStudents).toHaveTextContent("Totalt anmälda: 2");
  });

  it("displays the total age of registered students (VERY IMPORTANT)", () => {
    render(<RegisteredStudents registeredStudents={mockRegisteredStudents} />);
    const totalAge = screen.getByText(/Totala ålder på deltagare:/);
    const AgeSum = getTotalAge(mockRegisteredStudents);

    expect(totalAge).toHaveTextContent(`Totala ålder på deltagare: ${AgeSum}`);
  });
});
