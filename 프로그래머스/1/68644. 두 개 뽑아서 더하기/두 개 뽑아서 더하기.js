function solution(numbers) {
    // 두 개의 수를 뽑아 더해 만들 수 있는 모든 수
    const sums = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sums.push(numbers[i] + numbers[j]);
        }
    }
    
    const answer = [... new Set(sums)].sort((a, b) => a - b);
    
    return answer;
}