function getMaxSubSum(arr) {
  let result = [0];
  let arrCount = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] <= 0) {
      const nextI = arr.findIndex((elem, indx) => {
        if (elem > 0 && indx > i) return true;
        return false;
      });
      i = nextI === -1 ? arr.length : nextI - 1;
      result[++arrCount] = 0;
      continue;
    }
    result[arrCount] += arr[i];
  }
  return result.sort((a, b) => a - b).at(result.length - 1);
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
