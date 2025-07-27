"use strict";

// Task 1
function getPointThree() {
  var pointThree = Math.round((0.1 + 0.2) * 100) / 100; // manually

  var pointThreeFixed = (0.1 + 0.2).toFixed(1); // using toFixed

  document.getElementById("task_1_output_v1").innerHTML = pointThree;
  document.getElementById("task_1_output_v2").innerHTML = pointThreeFixed;
} // Task 2


function getStringNumSum() {
  var stringNum = "1";
  var numberNum = 2;
  var sum = +stringNum + numberNum; // using unary plus

  var sumParse = parseInt(stringNum) + numberNum; // using parseInt

  document.getElementById("task_2_output_v1").innerHTML = sum;
  document.getElementById("task_2_output_v2").innerHTML = sumParse;
} // Task 3


function getQntFiles() {
  var userDriveInput = document.getElementById("task_3_input").value;
  var fileSizeMb = 820;
  var filesOnDrive = Math.floor(userDriveInput / fileSizeMb);
  document.getElementById("task_3_output").innerHTML = filesOnDrive;
} // Task 4


function buyChocolates() {
  var valletMoney = document.getElementById("task_4_input").value;
  var chocolatePrice = document.getElementById("task_4_input_2").value;
  var qntChocolateToBuy = Math.floor(valletMoney / chocolatePrice);
  document.getElementById("task_4_output").innerHTML = qntChocolateToBuy;
} // Task 5


function getReverseDigit() {
  var threeDigitInt = +document.getElementById("task_5_input").value;
  var reverseDigitInt = threeDigitInt % 10 * 100 + Math.floor(threeDigitInt % 100 / 10) * 10 + Math.floor(threeDigitInt / 100);
  document.getElementById("task_5_output").innerHTML = reverseDigitInt;
} // Task 6


function getTwoMonthDeposit() {
  var userDepositInput = +document.getElementById("task_6_input").value;
  var interestRate = 0.05;
  var twoMonthAquisition = userDepositInput * interestRate * (2 / 12);
  document.getElementById("task_6_output").innerHTML = twoMonthAquisition;
} // Task 7

/*
    2 && 0 && 3 -> 0 

    2 || 0 || 3 -> 2

    2 && 0 || 3 -> 3
 */