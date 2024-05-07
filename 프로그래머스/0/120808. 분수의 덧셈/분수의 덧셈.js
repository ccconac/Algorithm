function calculationGCD(a, b) {
    return a % b === 0 ? b : calculationGCD(b, a % b)
}

function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2;
    const numer = numer1 * denom2 + numer2 * denom1;
    const gcd = calculationGCD(denom, numer);
    
    return [numer / gcd, denom / gcd];
}