/*1. Working with Advanced Type */
//1.1 :Enum usage for representing fixed values (e.g., days of the week).
var DaysofWeeks;
(function (DaysofWeeks) {
    DaysofWeeks[DaysofWeeks["sunday"] = 0] = "sunday";
    DaysofWeeks[DaysofWeeks["monday"] = 1] = "monday";
    DaysofWeeks[DaysofWeeks["tuesday"] = 2] = "tuesday";
    DaysofWeeks[DaysofWeeks["wednesday"] = 3] = "wednesday";
    DaysofWeeks[DaysofWeeks["thirsday"] = 4] = "thirsday";
    DaysofWeeks[DaysofWeeks["friday"] = 5] = "friday";
    DaysofWeeks[DaysofWeeks["saturday"] = 6] = "saturday";
})(DaysofWeeks || (DaysofWeeks = {}));
var today = DaysofWeeks.sunday;
console.log(today);
//assigning a variable multiple types
var user = {
    name: "syed khizar",
    email: "sdk@gmail.com",
};
console.log(user);
//assigned a variable both interfaces by intersection operator
var userLogin;
userLogin = {
    name: "syed khizar",
    email: "shak@gmail.com",
    password: 8572319,
};
