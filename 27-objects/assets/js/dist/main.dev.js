"use strict";

// Task 1
var car = {
  manufacturer: "Audi",
  model: "A7 C7 Sportback",
  year: 2014,
  avgSpeed: 150,
  fuelTank: 65,
  fuelConsumption: 8.2,
  drivers: ["John", "Jane", "Alice"],
  getInfo: function getInfo() {
    var result = "";

    for (var key in this) {
      if (typeof this[key] !== "function") {
        result += "".concat(key, ": ").concat(this[key], "\n");
      }
    }

    return result;
  },
  addDriver: function addDriver(name) {
    if (typeof name === "string") {
      this.drivers.push(name);
    }
  },
  isDriver: function isDriver(name) {
    if (typeof name === "string" && this.drivers.includes(name)) {
      return true;
    }

    return false;
  },
  calcToDist: function calcToDist(distance) {
    var time = +(distance / this.avgSpeed).toFixed(2);
    var fuel = +(this.fuelConsumption * distance / 100).toFixed(2);
    if (!(time % 4)) time += Math.trunc(time / 4) - 1;else if (time > 4) time += Math.trunc(time / 4);
    return [time, fuel];
  },
  getToDist: function getToDist(arr) {
    console.log("Time requaired: ".concat(arr[0]));
    console.log("Fuel requaired: ".concat(arr[1]));
  }
};
console.log(car.getInfo());
console.log(car.isDriver("Bob"));
car.addDriver("Bob");
console.log(car.getInfo());
console.log(car.isDriver("Bob"));
car.getToDist(car.calcToDist(1500)); // Task 2

var time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

function getTime(object) {
  var result = "";

  for (var key in object) {
    result += "".concat(key, ": ").concat(object[key], "\n");
  }

  console.log(result);
}

var addSeconds = sec2time;

function addMinutes(minutes) {
  var seconds = minutes * 60;
  return sec2time(seconds);
}

function addHours(hours) {
  var seconds = hours * 3600;
  return sec2time(seconds);
}

function sec2time(sec) {
  var hours = Math.trunc(sec / (60 * 60));
  var minutes = Math.trunc((sec - hours * 3600) / 60);
  var seconds = Math.round(sec - (hours * 3600 + minutes * 60));
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function time2sec(object) {
  return object.hours * 3600 + object.minutes * 60 + object.seconds;
}

getTime(time);
var time1 = addSeconds(20000);
getTime(time1);
var time2 = addMinutes(333.33333);
getTime(time2);
var time3 = addHours(5.5555555);
getTime(time3); // Task 3

var fraction = {
  numerator: 0,
  denumerator: 1,
  addTwoFractions: function addTwoFractions(fraction2) {
    if (this.denumerator == fraction2.denumerator) {
      this.numerator += fraction2.numerator;
      return;
    } else {
      var newDen = findLeastCommonMultiple(this.denumerator, fraction2.denumerator);
      useLeastCommonMultiple(this, fraction2, newDen);
      return this.addTwoFractions(fraction2);
    }
  },
  substractTwoFractions: function substractTwoFractions(fraction2) {
    if (this.denumerator == fraction2.denumerator) {
      this.numerator -= fraction2.numerator;
      return;
    } else {
      var newDen = findLeastCommonMultiple(this.denumerator, fraction2.denumerator);
      useLeastCommonMultiple(this, fraction2, newDen);
      return this.substractTwoFractions(fraction2);
    }
  },
  multiplyTwoFractions: function multiplyTwoFractions(fraction2) {
    this.numerator *= fraction2.numerator;
    this.denumerator *= fraction2.denumerator;
  },
  divideTwoFractions: function divideTwoFractions(fraction2) {
    this.numerator *= fraction2.denumerator;
    this.denumerator *= fraction2.numerator;
  },
  reductFraction: function reductFraction() {
    for (var i = 2; i < Math.max(this.numerator, this.denumerator); ++i) {
      if (!(this.numerator % i) && !(this.denumerator % i)) {
        this.numerator /= i;
        this.denumerator /= i;
      }
    }
  }
};
var fraction2 = Object.assign({}, fraction);
fraction.numerator = 5;
fraction.denumerator = 3;
fraction2.numerator = 3;
fraction2.denumerator = 7;
fraction.multiplyTwoFractions(fraction2);
fraction.reductFraction(fraction2);
console.log(fraction);
fraction.substractTwoFractions(fraction2);
fraction.reductFraction(fraction2);
console.log(fraction);
fraction.divideTwoFractions(fraction2);
fraction.reductFraction(fraction2);
console.log(fraction);
fraction.reductFraction();
fraction.reductFraction(fraction2);
console.log(fraction);

function findLeastCommonMultiple(denumerator1, denumerator2) {
  return denumerator1 * denumerator2 / EuclideanGcd(Math.max(Math.abs(denumerator1), Math.abs(denumerator2)), Math.min(Math.abs(denumerator1), Math.abs(denumerator2)));
}

function useLeastCommonMultiple(fraction1, fraction2, newDen) {
  fraction1.numerator *= newDen / fraction1.denumerator;
  fraction1.denumerator *= newDen / fraction1.denumerator;
  fraction2.numerator *= newDen / fraction2.denumerator;
  fraction2.denumerator *= newDen / fraction2.denumerator;
} // 25-loops-conditionals - Task 4


function EuclideanGcd(a, b) {
  while (true) {
    if (!a) return b;else if (!b) return a;
    return EuclideanGcd(Math.max(b, a % b), Math.min(b, a % b));
  }
}