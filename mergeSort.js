// Build function mergeSort
function mergeSort(array) {
  // base case
  if (array.length === 1) {
    // return 'sort' list
    return array;
  } else {
    // Half array length for splitting
    // Round for if array odd
    let half = Math.round(array.length / 2);
    // Get left
    let left = array.slice(0, half);
    // Get right
    let right = array.slice(half);
    // Merge
    console.log(left);
    console.log(right);
    return sort(mergeSort(left), mergeSort(right));
  }
}

// Had this in mergeSort but wasnt working right
function sort(left, right) {
  // For returning sorted array
  let sortedArray = [];
  // While left or right have an element
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  console.log(left);
  console.log(right);
  // If only right has elements
  while (right.length > 0) {
    sortedArray.push(right.shift());
  }
  // If only left has elements
  while (left.length > 0) {
    sortedArray.push(left.shift());
  }
  // Return sorted array
  console.log(sortedArray);
  return sortedArray;
}
