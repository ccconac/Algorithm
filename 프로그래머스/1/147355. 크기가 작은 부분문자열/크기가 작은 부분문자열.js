function solution(t, p) {
    // 숫자로 이루어진 문자열 t와 p  
    // t에서 p와 길이가 같은 부분 문자열 중  
    // 부분 문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 "횟수"
    let answer = 0;
    
    for (let i = 0; i <= t.length - p.length; i += 1) {
        const partialString = t.slice(i, i + p.length);
        
        if (+partialString <= +p) answer += 1;
    }
    
    return answer;
}