function solution(k, m, score) {
    // 사과는 상태에 따라 1-k점까지 분류
    // k점 = 최상급 / 1점 = 최하품
    
    // 과일 장수가 가능한 많은 사과를 팔았을 때 얻을 수 있는 최대 이익 계산
    // e.g. k = 3, m = 4, 사과 7개 [1, 2, 3, 1, 2, 3, 1]인 경우 
    // [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하면 최대 이익 얻을 수 있음
    // (최저 사과 점수 p) x (한 상자에 담긴 사과 개수 m) x (상자의 개수) = 2 x 4 x 1 = 8
    
    const boxCount = Math.floor(score.length / m);
    score.sort((a, b) => b - a); 
    
    let answer = 0;
    
    // 한 상자에 m개씩 담아 포장하고, 가장 낮은 점수가 p인 경우 한 상자의 가격은 p * m
    for (let i = m; i <= score.length; i += m) {
        answer += score[i - 1] * m;
    }
    
    return answer;
}