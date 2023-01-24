const a = [1, 4, 5, 6, 8, 9];
const b = [2, 3, 5, 6, 10, 12];

const c = [1, 4, 8, 9, 2, 3, 10, 12]; // coherence of a & b

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pointer = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pointer) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pointer, ...quickSort(right)];
}

console.log(quickSort(c));

// time complexity : O(n^2) - quadreatic & space complexity: O(n) - linear, because here space depends on input size. But during one cycle, recursively same function called twice.Because of this reason time complexity becomes quadratic.
