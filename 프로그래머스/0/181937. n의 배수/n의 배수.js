function solution(num, n) {
    let answer = 0;
    
    num % n ? answer = 0 : answer = 1;
    
    return answer;
}