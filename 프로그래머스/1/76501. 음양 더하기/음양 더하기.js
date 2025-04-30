function solution(absolutes, signs) {
    // 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes
    // 이 정수들의 부호를 차례대로 담은 boolean 배열 signs
    // 실제 정수들의 합
    let answer = 0;
    
    absolutes.forEach((number, index) => {
        if (signs[index]) answer += number;
        else answer += -number;
    })
    
    return answer;
}