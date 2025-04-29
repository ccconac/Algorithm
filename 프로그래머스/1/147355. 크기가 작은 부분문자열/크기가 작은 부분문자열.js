function solution(t, p) {
    // 숫자로 이루어진 문자열 t와 p  
    const arr = [];
    let answer = 0;
    
    for (let i = 0; i < t.length; i += 1) {
        arr.push(t.slice(i, i + p.length));
    }
    
    // t에서 p와 길이가 같은 부분 문자열 중  
    const numbers = arr.filter(number => number.length === p.length);
    
    // 부분 문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 "횟수"
    numbers.forEach(number => {
        if (Number(number) <= Number(p)) answer += 1;
    });
    
    return answer;
}