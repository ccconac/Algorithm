function solution(n) {
    const numbers = n.toString().split('').map(value => Number(value));
    
    return numbers.reduce((acc, curr) => acc + curr, 0);
}