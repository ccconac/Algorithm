function solution(arr, divisor) {
    // i != j일 경우 arr[i] != arr[j] => array는 길이 1 이상 배열
    
    // 1. array의 각 element를 divisor로 나눔
    // 2. divisor로 나누어 떨어지는 경우 배열에 넣음
    const dividedElement = arr.filter((value, index) => value % divisor === 0);
    // 3. 오름차순으로 정렬
    const answer = dividedElement.sort((a, b) => a - b);
    
    // 4. 만약에 나누어 떨어지는 element가 하나도 없을 경우 배열에 -1 담아 반환
    return answer.length ? answer : [-1];
}