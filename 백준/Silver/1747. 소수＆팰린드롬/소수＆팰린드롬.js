const input = require('fs').readFileSync(0).toString().trim();

let N = parseInt(input);

const prime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const palindrome = (num) => {
    const strNum = String(num);
    const length = strNum.length;
    for (let i = 0; i < length / 2; i++) {
        if (strNum[i] !== strNum[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

while (true) {
    if (prime(N) && palindrome(N)) {
      console.log(N);
      break;
    }
    N++;
}