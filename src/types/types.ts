export interface Person {
  firstName: string;
  lastName: string;
  email?: string;
}

export interface Teacher extends Person {
  role: string;
}

export interface Student extends Person {
  age: string;
}
