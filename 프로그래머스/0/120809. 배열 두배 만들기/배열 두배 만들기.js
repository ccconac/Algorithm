function solution(numbers) {
    const answer = [];
    
    numbers.forEach(value => {
        answer.push(value * 2);
    })
    
    return answer;
}