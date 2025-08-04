"use strict"; // 118 Pascal's triangle

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var generate = function generate(numRows) {
  var result = [];

  for (var i = 0; i < numRows; ++i) {
    var row = [];
    row.length = i + 1;

    for (var j = 0; j < row.length; ++j) {
      var element = 1;

      if (j === 0 || j === row.length - 1) {
        row[j] = element;
      } else if (i !== 0 && i !== 1) {
        element = result[i - 1][j - 1] + result[i - 1][j];
        row[j] = element;
      }
    }

    result.push(row);
  }

  return result;
}; // 1 Two sum


var twoSum = function twoSum(nums, target) {
  for (var i = 0; i < nums.length; ++i) {
    for (var j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        var result = [i, j];
        return result;
      }
    }
  }
}; // 2 Add two numbers
// Without list node, cause idk


var addTwoNumbers = function addTwoNumbers(l1, l2) {
  var dec = 1;
  var arr1 = 0;
  var arr2 = 0;

  for (var i = 0; i < l1.length; ++i) {
    l1[i] = l1[i] * dec;
    dec *= 10;
    arr1 += l1[i];
  }

  dec = 1;

  for (var _i = 0; _i < l2.length; ++_i) {
    l2[_i] = l2[_i] * dec;
    dec *= 10;
    arr2 += l2[_i];
  }

  var result = Array.from(String(arr1 + arr2), Number);
  return result.reverse();
}; // 13 Roman to integer


var romanToInt = function romanToInt(s) {
  s = s.split("");
  var result = 0;

  for (var i = 0; i < s.length; ++i) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] == "V") {
          result += 4;
          ++i;
        } else if (s[i + 1] == "X") {
          result += 9;
          ++i;
        } else {
          result += 1;
        }

        break;

      case "V":
        result += 5;
        break;

      case "X":
        if (s[i + 1] == "L") {
          result += 40;
          ++i;
        } else if (s[i + 1] == "C") {
          result += 90;
          ++i;
        } else {
          result += 10;
        }

        break;

      case "L":
        result += 50;
        break;

      case "C":
        if (s[i + 1] == "D") {
          result += 400;
          ++i;
        } else if (s[i + 1] == "M") {
          result += 900;
          ++i;
        } else {
          result += 100;
        }

        break;

      case "D":
        result += 500;
        break;

      case "M":
        result += 1000;
        break;

      default:
        result += 0;
    }
  }

  return result;
}; // 14 Longest common prefix


var longestCommonPrefix = function longestCommonPrefix(strs) {
  var result = "";
  var common = false;
  var lengths = strs.map(function (arr) {
    return arr.length;
  });
  var minLength = Math.min.apply(Math, _toConsumableArray(lengths));

  if (strs.length === 1) {
    result = strs[0];
    return result;
  }

  for (var i = 0; i < minLength; ++i) {
    for (var j = 0; j < strs.length - 1; ++j) {
      if (strs[j][i] == strs[j + 1][i]) common = true;else {
        common = false;
        break;
      }
    }

    if (common) {
      result += strs[0][i];
      continue;
    }

    break;
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));