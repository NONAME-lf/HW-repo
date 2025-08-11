"use strict";

function getMaxSubSum(arr) {
  var result = [0];
  var arrCount = 0;

  var _loop = function _loop(_i) {
    if (arr[_i] <= 0) {
      var nextI = arr.findIndex(function (elem, indx) {
        if (elem > 0 && indx > _i) {
          i = _i;
          return true;
        }

        i = _i;
        return false;
      });
      _i = nextI === -1 ? arr.length : nextI - 1;
      result[++arrCount] = 0;
      i = _i;
      return "continue";
    }

    result[arrCount] += arr[_i];
    i = _i;
  };

  for (var i = 0; i < arr.length; ++i) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return result.sort(function (a, b) {
    return a - b;
  }).at(result.length - 1);
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5

alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11

alert(getMaxSubSum([-2, -1, 1, 2])); // 3

alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100

alert(getMaxSubSum([1, 2, 3])); // 6

alert(getMaxSubSum([-1, -2, -3])); // 0
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;
//   for (let item of arr) {
//     // for each item of arr
//     partialSum += item; // add it to partialSum
//     maxSum = Math.max(maxSum, partialSum); // remember the maximum
//     if (partialSum < 0) partialSum = 0; // zero if negative
//   }
//   return maxSum;
// }