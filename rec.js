function fibs(n) {
  let sequence = [0, 1];
  for (i = 0; i < n - 2; i++) {
    let sum = sequence[i] + sequence[i + 1];
    sequence.push(sum);
  }
  console.log(sequence);
}

function fibsRec(n, sequence = [0, 1]) {
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return sequence;
  }

  if (sequence.length < n) {
    const nextFib =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextFib);
    return fibsRec(n, sequence);
  }

  return sequence;
}

console.log(fibsRec(8));
å;
