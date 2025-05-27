function solution(number) {
    // 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 삼총사
    // e.g. 5명의 학생(-2, 3, 0, 2, -5) 중 1, 3, 4번째 학생을 더하면 0이니까 삼총사
    // 2, 4, 5번째 학생의 정수 번호를 더해도 0이니까 삼총사
    // 두 가지 방법으로 삼총사 만들 수 있음 (이걸 반환)
    
    let answer = 0;
    
    for (let i = 0; i < number.length; i += 1) {
        for (let j = i + 1; j < number.length; j += 1) {
            for (let k = j + 1; k < number.length; k += 1) {
                if (number[i] + number[j] + number[k] === 0) answer += 1;
            }
        }
    }
    
    return answer;
}