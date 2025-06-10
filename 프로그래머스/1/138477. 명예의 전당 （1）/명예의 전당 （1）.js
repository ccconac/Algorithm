function solution(k, score) {
    // 매일 출연한 가수의 점수가 상위 k번째 이내이면 명예의 전당에 점수 올림
    // k일까지는 모든 출연 가수의 점수가 명예의 전당에 오름
    // k일 다음부터는 출연 가수의 점수가 기존 목록의 k번째 순위의 가수보다 높으면 교체
    // 명예의 전당 최하위 점수를 매일 발표 
    
    // k = 3, [10, 100, 20, 150, 1, 100, 200]이면 3명까지만 오르는 거임
    const honor = [];
    const answer = [];
    
    score.forEach((s, index) => {
        if (index < k) honor.push(s);
                
        if (s > Math.min(...honor)) {
            honor.pop();
            honor.push(s);
            
            honor.sort((a, b) => b - a);
        }
        
        answer.push(Math.min(...honor));
    })
    
    return answer;
}