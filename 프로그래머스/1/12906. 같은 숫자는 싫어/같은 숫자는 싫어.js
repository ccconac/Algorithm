function solution(arr) {
    // arr length 1,000,000 이하의 자연수 / 0 <= 원소 <= 9
    // 1. 연속적으로 나타나는 숫자 하나만 남기고 전부 제거
    const answer = [];
    
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === arr[i + 1]) continue;
        answer.push(arr[i]);
    }
    
    // 2. 원소들의 순서 유지해야 함
    return answer;
}