function solution(s) {
    let answer = 0;
    
    const n = s.length;
    // 열린 괄호와 닫힌 괄호를 매핑
    const mapping = {
      ')': '(',
      '}': '{',
      ']': '[',   
    };
    
    for (let i = 0; i < n; i++) {
        const stack = [];
        let isCorrect = true;
        
        for (let j = 0; j < n; j++) {
            const c = s[(i + j) % n]; // 문자열 회전 
            
            // 현재 문자가 닫힌 괄호라면 스택에 넣음 
            if (c === '(' || c === '{' || c === '[') stack.push(c);
            else {
                // 현재 문자열이 열린 괄호였다면 스택에 들어 있는 닫힌 괄호와 비교
                const top = stack.pop();
                
                // 스택에 들어 있던 닫힌 괄호와 다르다면 일치하지 않는 거니까 멈춤
                if (top !== mapping[c]) {
                    isCorrect = false;
                    break;
                }
            }
        }
        
        if (isCorrect && !stack.length) answer += 1;
    }
    
    return answer;
}