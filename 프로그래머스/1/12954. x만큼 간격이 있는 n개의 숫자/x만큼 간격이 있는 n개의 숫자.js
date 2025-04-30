function solution(x, n) {
    // x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트 반환
    const answer = [];
    
    for (let i = 1; i <= n; i += 1) answer.push(x * i);
    
    
    return answer;
}