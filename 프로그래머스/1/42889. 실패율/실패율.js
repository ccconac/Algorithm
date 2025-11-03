function solution(N, stages) {
    // 실패율: 스테이지 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    // 전체 스테이지 개수: N, 현재 멈춰 있는 스테이지 번호가 담긴 배열: stages
    
    // return: 실패율이 높은 순서부터 스테이지 번호 담긴 배열 (내림차순)
    
    // 1. 스테이지에 머물러 있는 사람들의 수
    const challenger = Array.from({ length: N + 2 }).fill(0);
    stages.forEach((stage) => challenger[stage] += 1);
    
    // 2. 현재 스테이지의 실패율
    const failRatio = {};
    let goalPlayer = stages.length;
    
    for (let i = 1; i <= N; i++) {
        if (!challenger[i]) {
            failRatio[i] = 0;
            continue;
        }
        
        failRatio[i] = challenger[i] / goalPlayer;
        goalPlayer -= challenger[i];
    }
    
    const answer = Object.entries(failRatio).sort((a, b) => b[1] - a[1]);
    
    return answer.map((stage) => Number(stage[0]));
}