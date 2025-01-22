export interface Person {
  name: string;
  age: number;
}

export function createPerson(name: string, age: number): Person {
  return {
    name: "syed khizar",
    age: 19,
  };
}
