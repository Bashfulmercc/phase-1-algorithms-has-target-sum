function hasTargetSum(array, target) {
  const obj = {}
  let diff

  for (let i = 0; i < array.length; i++) {
    diff = target - array[i]

    if (obj[diff]) {
      return true
    } else {
      obj[array[i]] = true
    }
  }
  return false
}

/* 
  O(n²)
*/

/* 
  I need to create a function that will take in an array of numbers
  iterate through all of the numbers subtracting them against the target 
  while checking the difference against the numbers in the array to see if they = it 
  if they do return true if not return false
*/

/*
  it takes each element of the array and gets the difference between the array element and the target
  it puts the current element into the obj as a key
  if any element in the array matches the difference between the given number and the new element return true
  else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
