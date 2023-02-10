function fibonacci(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  const seq = [0, 1];
  while (seq.length <= num) {
    const last = seq[seq.length - 1];
    const secondLast = seq[seq.length - 2];
    const newVal = last + secondLast;
    seq.push(newVal);
  }
  return seq[seq.length - 1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
