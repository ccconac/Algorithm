function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    const first = gcd(n, m);
    const second = lcm(n, m);
    
    return [first, second];
}