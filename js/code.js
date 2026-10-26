/* function oddSum(n) {
  if (n === 1) {
    return 1;
  } else {
    return oddSum(n - 1) + (2 * n - 1);
  }
}

const n = 6;
console.log("the result is: ", oddSum(n));

function sum(k) {
  if (k === 1) {
    return 1;
  } else {
    return sum(k - 1) + k;
  }
}

console.log("result", sum(4));

function tinh(j) {
  if (j === 1) {
    return 5;
  } else {
    return tinh(j - 1);
  }
}
console.log("ans", tinh(4));
*/
/*function centerHexagonal(k) {
  if (k === 1) {
    return 1;
  } else {
    return centerHexagonal(k - 1) + 6 * (k - 1);
  }
}
console.log(centerHexagonal(25));
*/
/*
function IdontKnow(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i * i; j++) {
      sum = sum + i / j;
    }
  }
  return sum;
}

console.log(IdontKnow(6));
*/
function TowerOfHaNoi(m) {
  if (m === 1) {
    return 1;
  }
  return 2 * TowerOfHaNoi(m - 1) + 1;
}

console.log(TowerOfHaNoi(7));


function Fibonachi(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return Fibonachi(n - 1) + Fibonachi(n - 2);
}

console.log(Fibonachi(20));
