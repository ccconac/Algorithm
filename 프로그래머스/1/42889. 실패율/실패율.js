function solution(N, stages) {
    // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    // 전체 스테이지 개수 = N, 현재 멈춰 있는 스테이지의 번호가 담긴 배열 stages
    
    // 1. 현재 스테이지에 몇 명의 도전자가 있는지 배열에 카운트
    const challenger = Array.from({ length: N + 2 }).fill(0);
    stages.forEach((stage) => challenger[stage] += 1);
    
    // 2. 실패율 객체 생성
    const failRatio = {};
    let total = stages.length; 
    
    // 현재 스테이지의 실패율을 구하는 거니까 
    // 스테이지 2라고 하면 클리어하지 못한 사람 3명 / 총 도전자 7명
    for (let i = 1; i <= N; i++) {
        // 스테이지에 도달한 유저가 0일 경우 실패율은 0
        if (challenger[i] === 0) {
            failRatio[i] = 0;
            continue;
        }
        
        failRatio[i] = challenger[i] / total;
        
        total -= challenger[i];
    }
    
    const answer = Object.entries(failRatio).sort((a, b) => b[1] - a[1]);
    
    return answer.map((value) => Number(value[0]));
    
}