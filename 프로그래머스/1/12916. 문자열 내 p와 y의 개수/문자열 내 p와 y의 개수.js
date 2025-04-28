function solution(s){
    // 1. s의 p의 개수와 y의 개수 비교 (대소문자 구분 X)
    // 1-1. 같으면 true
    // 1-2. 다르면 false
    if (s.toLowerCase().split('p').length !== s.toLowerCase().split('y').length) {
        return false;
    } 
    
    // 2. p와 y가 모두 하나도 없는 경우에는 항상 true 반환
    return true;
}