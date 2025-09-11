function solution(prices) {
    const n = prices.length;
    const answer = Array.from(n).fill(0);
    
    const stack = [0];
    
    for (let i = 1; i < n; i++) {
        // 가격이 떨어졌을 때
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        
        // 가격이 떨어지지 않았을 때
        stack.push(i);
    }
    
    // 종료될 때까지 가격이 떨어지지 않은 주가 
    while (stack.length) {
        const top = stack.pop();
        answer[top] = n - top - 1;
    }
    
    return answer;
}