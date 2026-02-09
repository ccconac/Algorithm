function solution(numbers) {
    // 0 또는 양의 정수가 주어졌을 때
    // 정수를 이어 붙여 만들 수 있는 가장 큰 수
    const answer = numbers.map((number) => number.toString()).sort((a, b) => (b + a) - (a + b));
    
    return answer[0] === '0' ? '0' : answer.join('');
}