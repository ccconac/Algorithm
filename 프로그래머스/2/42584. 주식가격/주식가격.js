function solution(prices) {
    const n = prices.length;
    const answer = Array(n).fill(0);
    const stack = [0];
    
    for (let i = 1; i < n; i++) {
        // 주식 가격 내려가는 경우
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        
        // 주식 가격 유지되는 경우
        stack.push(i);
    }
    
    // 끝날 때까지 떨어지지 않은 주가
    while (stack.length) {
        const top = stack.pop();
        answer[top] = n - top - 1;
    }
    
    return answer;
}