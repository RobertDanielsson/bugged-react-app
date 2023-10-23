import React from "react";
import { render, screen } from "@testing-library/react";
import { RegisteredTeachers } from "./RegisteredTeachers";
import { Teacher } from "../types/types";

const mockTeachers: Teacher[] = [
  {
    firstName: "John",
    lastName: "Doe",
    role: "Teacher",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    role: "Instructor",
  },
];

describe("RegisteredTeachers Component", () => {
  it("displays the 'Lärare' title", () => {
    render(<RegisteredTeachers teachers={mockTeachers} />);
    const title = screen.getByText("Lärare:");
    expect(title).toBeInTheDocument();
  });

  it("displays registered teachers with correct names and roles", () => {
    render(<RegisteredTeachers teachers={mockTeachers} />);

    const teacherNames = screen.getAllByText(/Namn:/);
    const teacherRoles = screen.getAllByText(/Roll:/);

    expect(teacherNames).toHaveLength(2);
    expect(teacherRoles).toHaveLength(2);

    expect(teacherNames[0]).toHaveTextContent("Namn: John Doe");
    expect(teacherRoles[0]).toHaveTextContent("Roll: Teacher");

    expect(teacherNames[1]).toHaveTextContent("Namn: Jane Smith");
    expect(teacherRoles[1]).toHaveTextContent("Roll: Instructor");
  });
});
