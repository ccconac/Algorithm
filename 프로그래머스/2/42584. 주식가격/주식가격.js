function solution(prices) {
    const n = prices.length;
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let second = 0;
        
        for (let j = i + 1; j < n; j++) {
            second += 1;
            if (prices[i] > prices[j]) break;
        }
        
        answer.push(second);
    }
    
    return answer;
}