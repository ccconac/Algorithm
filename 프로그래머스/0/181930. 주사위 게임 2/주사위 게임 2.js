function solution(a, b, c) {
    const numbers = new Set([a, b, c]);
    
    if (numbers.size === 3) return a + b + c
    if (numbers.size === 2) return (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
    if (numbers.size === 1) return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
}