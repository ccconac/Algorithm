function solution(num) {
    let answer = 0;
    
    // 1-1. 입력된 수가 짝수라면 2로 나눔
    // 1-2. 홀수라면 3을 곱하고 1을 더함
    // 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복
    while (num !== 1 && answer !== 500) {
        num = num % 2 ? num * 3 + 1 : num / 2;
        answer += 1;
    }
    
    return num === 1 ? answer : -1;
}