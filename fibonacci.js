// Using Iteration
function fibs(num) {
  let first = 0;
  let last = 1;
  let sum = 0;
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(first);
    sum = first + last;
    first = last;
    last = sum;
  }
  return array;
}

// Using recursion
function fibsRec(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    return [
      ...fibsRec(num - 1),
      fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
    ];
  }
}
