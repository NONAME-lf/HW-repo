"use strict";

// Task 1
function ageEstimation() {
  var userAge = document.getElementById("task_1_input").value;
  var result;

  if (isNaN(userAge) || userAge < 0) {
    result = "You've entered the wrong number, try again...";
  } else if (userAge < 12) {
    result = "Congratulations, you're a baby!";
  } else if (userAge < 18) {
    result = "Cool, you're a teenager!";
  } else if (userAge < 60) {
    result = "Hey, you're an adult!";
  } else if (userAge < 123) {
    result = "Still in your golden age!";
  } else {
    result = "Wow, going for the record!";
  }

  document.getElementById("task_1_output").innerHTML = result;
} // Task 2


function userSpecSymbol() {
  var number = document.getElementById("task_2_input").value;
  var result = "";

  if (number == "") {
    document.getElementById("task_2_output").innerHTML = result;
    return;
  }

  switch (+number) {
    case 1:
      result = "!";
      break;

    case 2:
      result = "@";
      break;

    case 3:
      result = "#";
      break;

    case 4:
      result = "$";
      break;

    case 5:
      result = "%";
      break;

    case 6:
      result = "^";
      break;

    case 7:
      result = "&";
      break;

    case 8:
      result = "*";
      break;

    case 9:
      result = "(";
      break;

    case 0:
      result = ")";
      break;

    default:
      result = "Enter numbers 0-9 only";
  }

  document.getElementById("task_2_output").innerHTML = result;
} // Task 3


function sumRange() {
  var startRange = isValid(document.getElementById("task_3_input_from").value, true, true);
  var endRange = isValid(document.getElementById("task_3_input_to").value, true, true);
  var result;

  if (typeof startRange === "string") {
    result = startRange;
    document.getElementById("task_3_output").innerHTML = result;
    return;
  } else if (typeof endRange === "string") {
    result = endRange;
    document.getElementById("task_3_output").innerHTML = result;
    return;
  }

  if (startRange >= endRange) {
    result = "First number must be smaller than second one!";
    document.getElementById("task_3_output").innerHTML = result;
    return;
  }

  var sum = 0;

  for (var i = startRange; i <= endRange; ++i) {
    sum += i;
  }

  result = sum;
  document.getElementById("task_3_output").innerHTML = result;
} // Checks if number is not 0 or NaN


function isValid(userNumberInput) {
  var isZeroAllowed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isNegativeAllowed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  userNumberInput = userNumberInput === "" ? NaN : +userNumberInput;

  if (isNaN(userNumberInput)) {
    return userNumberInput = "Enter a valid number!";
  } else if (!isZeroAllowed && userNumberInput === 0) {
    return userNumberInput = "Number must not be 0!";
  } else if (!Number.isInteger(userNumberInput)) {
    return userNumberInput = "Number must be integer!";
  } else if (!isNegativeAllowed && userNumberInput < 0) {
    return userNumberInput = "Number must not be nagative!";
  }

  return userNumberInput;
} // Task 4


function EuclideanGcd(a, b) {
  while (true) {
    if (!a) return b;else if (!b) return a;
    return EuclideanGcd(Math.max(b, a % b), Math.min(b, a % b));
  }
}

function greatestCommonDivisor() {
  var firstNum = isValid(document.getElementById("task_4_input_first").value, false, true);
  var secondNum = isValid(document.getElementById("task_4_input_second").value, false, true);

  if (typeof firstNum === "string") {
    document.getElementById("task_4_output").innerHTML = firstNum;
    return;
  } else if (typeof secondNum === "string") {
    document.getElementById("task_4_output").innerHTML = secondNum;
    return;
  }

  var result;
  result = EuclideanGcd(Math.max(Math.abs(firstNum), Math.abs(secondNum)), Math.min(Math.abs(firstNum), Math.abs(secondNum)));
  document.getElementById("task_4_output").innerHTML = result; // for (let i = Math.min(Math.abs(firstNum), Math.abs(secondNum)); i > 0; --i) {
  //   if (!(firstNum % i) && !(secondNum % i)) {
  //     result = i;
  //     break;
  //   }
  // }
} // Task 5


function numberDividers() {
  // In order to keep number const, use conditional(ternary) operator to asign wheter error message or modulus of it
  var number = typeof isValid(document.getElementById("task_5_input").value, false, true) === "string" ? isValid(document.getElementById("task_5_input").value, false, true) : Math.abs(isValid(document.getElementById("task_5_input").value, false, true));

  if (typeof number === "string") {
    document.getElementById("task_5_output").innerHTML = number;
    return;
  } // number = Math.abs(number);


  var result = "";

  for (var i = 1; i <= number; ++i) {
    if (i == number) {
      result += i;
      break;
    }

    if (!(number % i)) {
      result += i + ", ";
    }
  }

  document.getElementById("task_5_output").innerHTML = result;
} // Task 6


function palindromeCheck() {
  var number = isValid(document.getElementById("task_6_input").value, true, false);
  var result;

  if (typeof number === "string") {
    result = number;
    document.getElementById("task_6_output").innerHTML = result;
    return;
  }

  var stringNumber = document.getElementById("task_6_input").value;

  if (stringNumber.length !== 5) {
    result = "Enter 5 digit number!";
    document.getElementById("task_6_output").innerHTML = result;
    return;
  }

  for (var i = 0; i < 5; ++i) {
    if (stringNumber[i] !== stringNumber[4 - i]) {
      result = "Number is not a palindrome";
      document.getElementById("task_6_output").innerHTML = result;
      return;
    }
  }

  result = "Number is a palindrome";
  document.getElementById("task_6_output").innerHTML = result;
} // Task 7


function calculateDiscount() {
  var value = isValid(document.getElementById("task_7_input").value);
  var result;
  var discount = 0;

  if (typeof value === "string") {
    result = value;
    document.getElementById("task_7_output").innerHTML = result;
    return;
  }

  if (value >= 200 && value < 300) {
    discount = 0.03;
  } else if (value >= 300 && value < 500) {
    discount = 0.05;
  } else if (value >= 500) {
    discount = 0.07;
  }

  result = value - value * discount;
  document.getElementById("task_7_output").innerHTML = result;
  return;
} // Task 8


function cycleDaysOfWeek() {
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);

  do {
    currentDate.setDate(currentDate.getDate() + 1);
  } while (confirm("".concat(currentDate.toLocaleDateString("en-us", {
    weekday: "long"
  }), ". Do you want to see the next day?")));
}