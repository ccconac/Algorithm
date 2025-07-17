function solution(n, m, section) {
    // 벽 1미터 길이의 구역 n개로 나누고 왼쪽부터 순서대로 1번부터 N번까지 번호 붙임
    // 롤러 길이 m미터
    // 1-1. 롤러 벽에서 벗어나면 안 됨
    // 1-2. 구역의 일부분만 포함되도록 칠하면 안 됨
    let answer = 0;
    let curr = 0;
    
    for (let i = 0; i < section.length ; i += 1){
        if (curr < section[i]) {
            answer += 1;
            curr = section[i] + m - 1;
        }
    }
    
    return answer;
}
