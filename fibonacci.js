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
