"use strict";
// 118 Pascal's triangle
let generate = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows; ++i) {
    const row = [];
    row.length = i + 1;
    for (let j = 0; j < row.length; ++j) {
      let element = 1;
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
};

// 1 Two sum
let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        let result = [i, j];
        return result;
      }
    }
  }
};

// 2 Add two numbers
// Without list node, cause idk
let addTwoNumbers = function (l1, l2) {
  let dec = 1;
  let arr1 = 0;
  let arr2 = 0;
  for (let i = 0; i < l1.length; ++i) {
    l1[i] = l1[i] * dec;
    dec *= 10;
    arr1 += l1[i];
  }
  dec = 1;
  for (let i = 0; i < l2.length; ++i) {
    l2[i] = l2[i] * dec;
    dec *= 10;
    arr2 += l2[i];
  }
  let result = Array.from(String(arr1 + arr2), Number);
  return result.reverse();
};

// 13 Roman to integer
let romanToInt = function (s) {
  s = s.split("");
  let result = 0;
  for (let i = 0; i < s.length; ++i) {
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
};

// 14 Longest common prefix
let longestCommonPrefix = function (strs) {
  let result = "";
  let common = false;
  const lengths = strs.map((arr) => arr.length);
  const minLength = Math.min(...lengths);
  if (strs.length === 1) {
    result = strs[0];
    return result;
  }
  for (let i = 0; i < minLength; ++i) {
    for (let j = 0; j < strs.length - 1; ++j) {
      if (strs[j][i] == strs[j + 1][i]) common = true;
      else {
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
