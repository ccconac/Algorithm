function solution(d, budget) {
    // 각 부서가 신청한 금액만큼 모두 지원
    // 1000원을 신청 => 1000원을 지원해야 함 (적은 금액 지원할 수 없음)
    let answer = 0;
    d.sort((a, b) => a - b);
    
    d.forEach((money) => {
        if (budget < money) return;
            
        budget -= money;
        answer += 1;    
    })
    
    // 신청한 금액 배열 d, 예산 budget => 최대 몇 개의 부서에 물품 지원 가능?
    return answer;
}