function solution(food) {
    // 한 선수는 왼쪽에서 오른쪽, 다른 선수는 오른쪽에서 왼쪽
    // 중앙에 물을 배치하고 물을 먼저 먹으면 승리
    
    // 두 선수가 먹는 음식 종류, 양, 순서가 같아야 함
    // 칼로리가 낮은 음식을 먼저 먹을 수 있게 배치 
    // 조건을 고려하지 않고 음식을 주문해서 몇 개의 음식은 대회에 사용하지 못함
    let leftPlayer = '';
    
    // 3가지 음식 준비
    // 1번 3개, 2번 4개, 3번 6개, 물은 0번
    // 두 선수는 1번 음식 1개, 2번 음식 2개, 3번 음식 3개 먹게 됨 => 1번 음식 1개 사용 불가
    for (let i = 1; i < food.length; i += 1) {
        const foodCount = food[i] / 2;
        leftPlayer += `${i}`.repeat(foodCount);
    }
    
    // 배치는 1223330333221
    const rightPlayer = [...leftPlayer].reverse().join('');
    const answer = [...leftPlayer, '0', ...rightPlayer];
    
    // 대회를 위한 음식 배치를 나타내는 문자열 반환
    return answer.join('');
}