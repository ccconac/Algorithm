function solution(s) {
    // 1. s의 길이가 4 또는 6인지
    // 2. s가 숫자로만 구성되어 있는지 (1과 2는 AND)
    // 3. 두 조건을 만족하면 true 반환 아니면 false 반환
    
    if ((s.length === 4 || s.length === 6) && s.match(/^[0-9]+$/)) return true;
    return false;
}