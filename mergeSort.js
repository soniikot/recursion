function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const midpoint = Math.floor(array.length / 2);
  const leftPart = array.slice(0, midpoint);
  const rightPart = array.slice(midpoint);

  const sortedLeft = mergeSort(leftPart);
  const sortedRight = mergeSort(rightPart);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}
const array = [105, 79, 100, 110];
const sortedArray = mergeSort(array);
console.log(sortedArray);
