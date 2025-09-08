function solution(prices) {
    // 가격이 떨어지지 않은 기간이 몇 초인지 return
    const n = prices.length;
    const answer = Array.from(n).fill(0);
    
    const stack = [0]; 
    
    for (let i = 1; i < n; i++) {
        // 가격이 떨어졌을 경우
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        
        // 가격이 떨어지지 않았다면
        stack.push(i);
    }
        
    // 스택에 남아 있다면 가격이 떨어지지 않은 것
    while (stack.length) {
        const j = stack.pop();
        answer[j] = n - 1 - j;
    }
    
    return answer;
}