// Task 1
const car = {
  manufacturer: "Audi",
  model: "A7 C7 Sportback",
  year: 2014,
  avgSpeed: 150,
  fuelTank: 65,
  fuelConsumption: 8.2,
  drivers: ["John", "Jane", "Alice"],

  getInfo() {
    let result = "";
    for (let key in this) {
      if (typeof this[key] !== "function") {
        result += `${key}: ${this[key]}\n`;
      }
    }
    return result;
  },
  addDriver(name) {
    if (typeof name === "string") {
      this.drivers.push(name);
    }
  },
  isDriver(name) {
    if (typeof name === "string" && this.drivers.includes(name)) {
      return true;
    }
    return false;
  },

  calcToDist(distance) {
    let time = +(distance / this.avgSpeed).toFixed(2);
    const fuel = +((this.fuelConsumption * distance) / 100).toFixed(2);
    if (!(time % 4)) time += Math.trunc(time / 4) - 1;
    else if (time > 4) time += Math.trunc(time / 4);
    return [time, fuel];
  },
  getToDist(arr) {
    console.log(`Time requaired: ${arr[0]}`);
    console.log(`Fuel requaired: ${arr[1]}`);
  },
};

// console.log(car.getInfo());
// console.log(car.isDriver("Bob"));
// car.addDriver("Bob");
// console.log(car.getInfo());
// console.log(car.isDriver("Bob"));
// car.getToDist(car.calcToDist(1500));

// Task 2
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getTime(object) {
  let result = "";
  for (let key in object) {
    result += `${key}: ${object[key]}\n`;
  }
  console.log(result);
}

const addSeconds = sec2time;

function addMinutes(minutes) {
  let seconds = minutes * 60;
  return sec2time(seconds);
}

function addHours(hours) {
  let seconds = hours * 3600;
  return sec2time(seconds);
}

function sec2time(sec) {
  const hours = Math.trunc(sec / (60 * 60));
  const minutes = Math.trunc((sec - hours * 3600) / 60);
  const seconds = Math.round(sec - (hours * 3600 + minutes * 60));
  return {
    hours,
    minutes,
    seconds,
  };
}

function time2sec(object) {
  return object.hours * 3600 + object.minutes * 60 + object.seconds;
}

// getTime(time);
// let time1 = addSeconds(20000);
// getTime(time1);
// let time2 = addMinutes(333.33333);
// getTime(time2);
// let time3 = addHours(5.5555555);
// getTime(time3);

// Task 3
/* Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
Складання 2-х об'єктів-дробів.
Віднімання 2-х об'єктів-дробів.
Множення 2-х об'єктів-дробів.
Ділення 2-х об'єктів-дробів.
Скорочення об'єкта-дробу. */
const fraction = {
  numerator: 0,
  denumerator: 1,

  addTwoFractions(fraction2) {
    if (this.denumerator == fraction2.denumerator) {
      return {
        numerator: this.numerator + fraction2.numerator,
        denumerator: this.denumerator,
      };
    } else {
      let newDen = findLeastCommonMultiple(
        this.denumerator,
        fraction2.denumerator
      );
      this.numerator *= newDen / this.denumerator;
      this.denumerator *= newDen / this.denumerator;
      fraction2.numerator *= newDen / fraction2.denumerator;
      fraction2.denumerator *= newDen / fraction2.denumerator;
      return this.addTwoFractions(fraction2);
    }
  },

  substractTwoFractions(fraction2) {
    if (this.denumerator == fraction2.denumerator) {
      return {
        numerator: this.numerator - fraction2.numerator,
        denumerator: this.denumerator,
      };
    } else {
      let newDen = findLeastCommonMultiple(
        this.denumerator,
        fraction2.denumerator
      );
      this.numerator *= newDen / this.denumerator;
      this.denumerator *= newDen / this.denumerator;
      fraction2.numerator *= newDen / fraction2.denumerator;
      fraction2.denumerator *= newDen / fraction2.denumerator;
      return this.substractTwoFractions(fraction2);
    }
  },

  multiplyTwoFractions(fraction2) {
    return {
      numerator: this.numerator * fraction2.numerator,
      denumerator: this.denumerator * fraction2.denumerator,
    };
  },
  divideTwoFractions(fraction2) {
    return {
      numerator: this.numerator * fraction2.denumerator,
      denumerator: this.denumerator * fraction2.numerator,
    };
  },
};

const fraction2 = Object.assign({}, fraction);
fraction.numerator = 5;
fraction.denumerator = 3;
fraction2.numerator = 3;
fraction2.denumerator = 7;
console.log(fraction.substractTwoFractions(fraction2));
console.log(fraction.multiplyTwoFractions(fraction2));
console.log(fraction.divideTwoFractions(fraction2));

function findLeastCommonMultiple(denumerator1, denumerator2) {
  let den1 = denumerator1;
  let den2 = denumerator2;
  let arr1 = [];
  let arr2 = [];
  let i = 2;
  while (den1 > 1) {
    if (!(den1 % i)) {
      arr1.push(i);
      den1 /= i;
    } else ++i;
  }
  i = 2;
  while (den2 > 1) {
    if (!(den2 % i)) {
      den2 /= i;
      arr2.push(i);
    } else ++i;
  }
  let result = 1;
  for (let i = 0; i < Math.max(arr1.length, arr2.length); ++i) {
    if (arr1[i] !== arr2[i]) {
      result *= arr1[i];
    }
    if (arr2[i] !== arr1[i]) {
      result *= arr2[i];
    }
    if (arr1[i] === arr2[i]) {
      result *= arr1[i];
    }
  }
  return result;
}
