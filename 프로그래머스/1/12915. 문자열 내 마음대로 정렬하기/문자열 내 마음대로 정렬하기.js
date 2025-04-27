function solution(strings, n) {
    // 문자열로 구성된 strings, 정수 n
    // 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
    
    // 1. 각 문자열의 인덱스 n번째 글자를 선택
    // 2. 오름차순 정렬......
    const answer = strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        else if (a[n] === b[n]) {
            if (a > b) return 1;
            else if (a < b) return -1;
            return 0;
        }
    });
    
    return answer;
}