const a = [1, 4, 5, 6, 8, 9];
const b = [2, 3, 5, 6, 10, 12];

const c = [1, 4, 8, 9, 2, 3, 10, 12]; // coherence of a & b

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch(c, 9));

// time complexity & space complexity: O(n), because here time and space depends on input size. If input size increases, time & space complexity will also increase and vice-versa.
