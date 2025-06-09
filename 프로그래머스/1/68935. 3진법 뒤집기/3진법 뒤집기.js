function solution(n) {
    const ternary = [];
    let answer = 0;
    
    while (n > 0) {
        ternary.push(n % 3);
        n = Math.floor(n / 3);
    }
    
    ternary.reverse();
    
    for (let i = 0; i < ternary.length; i += 1) {
        answer += ternary[i] * Math.pow(3, i);
    }
    
    return answer;
}