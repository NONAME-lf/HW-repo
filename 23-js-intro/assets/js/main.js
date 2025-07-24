const myName = "John Doe";
const my_name = "John Doe";
const MY_NAME = "John Doe";
const myName123 = "John Doe";
const $myName = "John Doe";

// const my Name = "John Doe";
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
  const userName = prompt(`Enter your name:`);
  alert(`Hello, ${userName}`);
}

const year = 2025;
function askBirthYear() {
  const userBirthYear = prompt(`Enter your year of birth:`);
  alert(`Your age is ${year - userBirthYear - 1} ~ ${year - userBirthYear}`);
}

function sqrPerimeter() {
  const side = prompt(`Enter the side of a square:`);
  alert(`Perimeter of square with side ${side} is: ${side * 4}`);
}

function circleArea() {
  const radius = prompt(`Enter radius of a circe:`);
  alert(`Radius of this circle is: ${Math.PI * radius * radius}`);
}

function onTime() {
  const dist = prompt(`Enter the distance in kilometers between two cities:`);
  const timeDesired = prompt(
    `Enter in how many hours you want to get to your destination:`
  );
  alert(
    `In order to get trough ${dist}km in ${timeDesired}, you'll have to be moving with the minimum speed of: ${
      dist / timeDesired
    }km/h`
  );
}

function exchangeCurrency() {
  const usdToEurRate = 0.85;
  const amount = prompt(`Enter amout of dollars your wish to exhange to euro:`);
  alert(`Exchanging ${amount}$: ${amount * usdToEurRate} Euro`);
}
