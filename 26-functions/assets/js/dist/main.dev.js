"use strict";

// Task 1
function funcDeclr() {//body
}

var funcExpr = function funcExpr() {//body
};

var funcArrw = function funcArrw() {//body
}; // Task 2


function countArguments() {
  return arguments.length;
} // Task 3


function compareNumbers(num1, num2) {
  var result = 0;
  if (num1 === num2) return result;
  return result = num1 > num2 ? 1 : -1;
} // Task 4


function calcFactorial(number) {
  var result = 1;

  for (var i = 2; i <= number; ++i) {
    result *= i;
  }

  return result;
}

function getFactorial(num) {
  if (isValid(num)) {
    document.getElementById("task_4_output").innerHTML = calcFactorial(num);
  } else {
    document.getElementById("task_4_output").innerHTML = "Enter a valid number that is not negative!";
  }
}

function isValid(number) {
  var isNegativeAllowed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isZeroAllowed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (isNaN(number)) {
    return false;
  } else if (number < 0 && !isNegativeAllowed) {
    return false;
  } else if (number === 0 && !isZeroAllowed) {
    return false;
  }

  return true;
} // Task 5


function mergeNumbers(num1, num2, num3) {
  result = 0;
  num1 *= 100;
  num2 *= 10;
  return result = num1 + num2 + num3;
}

function getMergedNumbers(num1, num2, num3) {
  if (isValid(num1) && isValid(num2) && isValid(num3)) {
    document.getElementById("task_5_output").innerHTML = mergeNumbers(num1, num2, num3);
  } else {
    document.getElementById("task_5_output").innerHTML = "Enter valid numbers!";
  }
} // Task 6


function calcAreaOfRectangle() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (length && width) return length * width;else return length * length || width * width;
}

function getAreaOfRectangle(length) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (isValid(length) && isValid(width)) {
    var _result = calcAreaOfRectangle(length, width);

    document.getElementById("task_6_output").innerHTML = width !== 0 && length !== 0 && width !== length ? "Area of the rectangle is ".concat(_result) : "Area of the square is ".concat(_result);
  } else {
    document.getElementById("task_6_output").innerHTML = "Enter valid numbers!";
  }
} // Task 7


function isPerfectNumber(num) {
  var sum = 0;

  for (var i = num - 1; i >= 1; --i) {
    if (!(num % i)) {
      sum += i;
    }
  }

  return sum === num;
}

function checkIsPerfectNumber(num) {
  result = "";

  if (isValid(num, false, false)) {
    result = isPerfectNumber(num) ? "Number is perfect" : "Number is not perfect";
  } else {
    result = "Enter a valid number";
  }

  document.getElementById("task_7_output").innerHTML = result;
} // Task 8


function calcPerfectRangeNumbers(num1, num2) {
  var result = "";

  for (var i = num1; i <= num2; ++i) {
    if (isPerfectNumber(i)) {
      result += i + ", ";
    }
  }

  return result;
}

function getPerfectRangeNumbers(num1, num2) {
  if (isValid(num1, false, false) && isValid(num2, false, false)) {
    document.getElementById("task_8_output").innerHTML = "From the range of ".concat(num1, " - ").concat(num2, ", perfect numbers are: ").concat(calcPerfectRangeNumbers(num1, num2));
  } else {
    document.getElementById("task_8_output").innerHTML = "Enter valid numbers of range!";
  }
}