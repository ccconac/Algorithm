function solution(a, b) {
    let answer = 0;
    const bigA = Number(a.toString() + b.toString());
    const bigB = Number(b.toString() + a.toString());
    
    bigA > bigB ? answer = bigA : answer = bigB;
    
    return answer;
}