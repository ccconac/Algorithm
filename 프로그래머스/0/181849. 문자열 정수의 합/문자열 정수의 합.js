function solution(num_str) {
    const numbers = [...num_str].map(Number);
    const answer = numbers.reduce((acc, curr) => acc + curr, 0);
    
    return answer;
}