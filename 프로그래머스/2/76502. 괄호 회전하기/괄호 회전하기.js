function solution(s) {
    const n = s.length; 
    let answer = 0;
    
    for (let i = 0; i < n; i++) {
        const stack = [];
        let isCorrect = true;
        
        for (let j = 0; j < n; j++) {
            const c = s[(i + j) % n];
            
            if (c === '(' || c === '{' || c === '[') stack.push(c);
            else {
                if (!stack.length) {
                    isCorrect = false;
                    break;
                }
                
                const top = stack[stack.length - 1];
                
                if (c === ')' && top === '(') stack.pop();
                else if (c === '}' && top === '{') stack.pop();
                else if (c === ']' && top === '[') stack.pop();
                else {
                    isCorrect = false;
                    break;
                }
            }
        }
        
        if (isCorrect && !stack.length) answer += 1;
    }
    
    return answer;
}