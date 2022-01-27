function findFirstDuplicate(arr) {
  const set = new Set();

  for (const e of arr) {
    if (set.has(e)) {
      console.log(e);
      return e;
    } else {
      set.add(e);
    }
  }
  return -1; 
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 3');
  console.log('=>', findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log('');

  console.log('Expecting: -1');
  console.log('=>', findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*

- Rewritting the problem:

    Given an array return -1 if none of the elements in the array are repeated, if
    there is at least one repeated element, return the first one found.

- Pseudocode:

    we are given an array (arr)
      we will loop through it checking if an element and the following elemment match
        if there is a match we will return that elements value and exit the loop
          if there are no matches we will return -1
*/

findFirstDuplicate([2, 1, 3, 3, 2]);
// console.log(findFirstDuplicate([2]));
