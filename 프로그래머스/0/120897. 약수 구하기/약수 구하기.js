function solution(n) {
    const numbers = Array.from({ length: n }, (_, index) => index + 1);
    return numbers.filter(value => n % value === 0);
}