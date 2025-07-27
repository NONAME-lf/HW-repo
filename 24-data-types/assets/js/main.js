// Task 1
function getPointThree() {
  const pointThree = Math.round((0.1 + 0.2) * 100) / 100; // manually
  const pointThreeFixed = (0.1 + 0.2).toFixed(1); // using toFixed

  document.getElementById("task_1_output_v1").innerHTML = pointThree;
  document.getElementById("task_1_output_v2").innerHTML = pointThreeFixed;
}
// Task 2
function getStringNumSum() {
  const stringNum = "1";
  const numberNum = 2;

  const sum = +stringNum + numberNum; // using unary plus
  const sumParse = parseInt(stringNum) + numberNum; // using parseInt

  document.getElementById("task_2_output_v1").innerHTML = sum;
  document.getElementById("task_2_output_v2").innerHTML = sumParse;
}

// Task 3
function getQntFiles() {
  let userDriveInput = document.getElementById("task_3_input").value;

  const fileSizeMb = 820;
  let filesOnDrive = Math.floor(userDriveInput / fileSizeMb);
  document.getElementById("task_3_output").innerHTML = filesOnDrive;
}

// Task 4
function buyChocolates() {
  let valletMoney = document.getElementById("task_4_input").value;
  let chocolatePrice = document.getElementById("task_4_input_2").value;
  let qntChocolateToBuy = Math.floor(valletMoney / chocolatePrice);
  document.getElementById("task_4_output").innerHTML = qntChocolateToBuy;
}

// Task 5
function getReverseDigit() {
  let threeDigitInt = +document.getElementById("task_5_input").value;
  let reverseDigitInt =
    (threeDigitInt % 10) * 100 +
    Math.floor((threeDigitInt % 100) / 10) * 10 +
    Math.floor(threeDigitInt / 100);
  document.getElementById("task_5_output").innerHTML = reverseDigitInt;
}

// Task 6
function getTwoMonthDeposit() {
  let userDepositInput = +document.getElementById("task_6_input").value;
  const interestRate = 0.05;
  let twoMonthAquisition = userDepositInput * interestRate * (2 / 12);
  document.getElementById("task_6_output").innerHTML = twoMonthAquisition;
}
// Task 7
/*
    2 && 0 && 3 -> 0 

    2 || 0 || 3 -> 2

    2 && 0 || 3 -> 3
 */
