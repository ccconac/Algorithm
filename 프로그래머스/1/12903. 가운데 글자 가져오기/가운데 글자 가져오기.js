function solution(s) {
    // s의 가운데 글자 반환 
    // 단어의 길이가 짝수일 경우에는 두 글자 반환
    
    // 1. s의 길이를 반절로 나눔
    const center = Math.ceil(s.length / 2);
    
    // 1-1. s의 길이가 홀수일 경우 가운데 한 글자 반환
    // 1-2. s의 길이가 짝수일 경우 가운데 두 글자 반환
    return s.substring(center - 1, s.length % 2 ? center : center + 1);
}
