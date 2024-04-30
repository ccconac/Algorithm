function solution(numbers) {
    numbers.sort((a, b) => b - a);
    
    const max1 = numbers[0];
    const max2 = numbers[1];
    
    return max1 * max2;
}