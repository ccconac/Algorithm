function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '').split('').map(Number);
    
    return answer.sort((a, b) => a - b);
}