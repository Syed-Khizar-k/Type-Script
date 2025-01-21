/*1. Working with Advanced Type */

//1.1 :Enum usage for representing fixed values (e.g., days of the week).
enum DaysofWeeks {
  sunday = 0,
  monday,
  tuesday,
  wednesday,
  thirsday,
  friday,
  saturday,
}
let today: DaysofWeeks = DaysofWeeks.sunday;
console.log(today);
//Enum task completed

//1.2: Union types to allow a variable to have multiple types.
//declaring type1
type login = {
  name: string;
  email: string;
};
//declaring type2
type signUp = {
  name: string;
  email: string;
  password: number;
};
//assigning a variable multiple types
let user: login | signUp = {
  name: "syed khizar",
  email: "sdk@gmail.com",
};
console.log(user);

//1.3: Intersection types to combine multiple types into one.
//declaring interface types
interface Login {
  name: string;
  email: string;
}

interface LoginUpdate {
  password: number;
}
//assigned a variable both interfaces by intersection operator
let userLogin: Login & LoginUpdate;
userLogin = {
  name: "syed khizar",
  email: "shak@gmail.com",
  password: 8572319,
};
