function solution(numbers) {
    const hideNumbers = [];
    
    for (let i = 0; i < 10; i += 1) {
        if (!numbers.includes(i)) hideNumbers.push(i);
    }
    
    return hideNumbers.reduce((acc, curr) => acc + curr, 0);
}