"use strict";

var myName = "John Doe";
var my_name = "John Doe";
var MY_NAME = "John Doe";
var myName123 = "John Doe";
var $myName = "John Doe"; // const my Name = "John Doe";
// const my-name = "John Doe";
// const 123myName = "John Doe";
// const my%Name! = "John Doe";
// const my'Name = "John Doe";
// Line comment

/* 
Multi-line comment
 */

/* 
Camel Case: myName
Snake Case: my_name
Kebab Case: my-name
Pascal Case: MyName
Constant Case: MY_NAME
Magick Case: a  :)
 */

function askName() {
  var userName = prompt("Enter your name:");
  alert("Hello, ".concat(userName));
}

var year = 2025;

function askBirthYear() {
  var userBirthYear = prompt("Enter your year of birth:");
  alert("Your age is ".concat(year - userBirthYear - 1, " ~ ").concat(year - userBirthYear));
}

function sqrPerimeter() {
  var side = prompt("Enter the side of a square:");
  alert("Perimeter of square with side ".concat(side, " is: ").concat(side * 4));
}

function circleArea() {
  var radius = prompt("Enter radius of a circe:");
  alert("Radius of this circle is: ".concat(Math.PI * radius * radius));
}

function onTime() {
  var dist = prompt("Enter the distance in kilometers between two cities:");
  var timeDesired = prompt("Enter in how many hours you want to get to your destination:");
  alert("In order to get trough ".concat(dist, "km in ").concat(timeDesired, ", you'll have to be moving with the minimum speed of: ").concat(dist / timeDesired, "km/h"));
}

function exchangeCurrency() {
  var usdToEurRate = 0.85;
  var amount = prompt("Enter amout of dollars your wish to exhange to euro:");
  alert("Exchanging ".concat(amount, "$: ").concat(amount * usdToEurRate, " Euro"));
}