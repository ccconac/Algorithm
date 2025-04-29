function solution(s) {
    // 제한 사항!!
    // 공백을 기준으로 분리해 각 단어의 인덱스를 짝/홀수 판단
    const words = s.split(' ');
    // 첫 번째 글자는 0번째 인덱스로 보고 짝수 번째 알파벳으로 처리
    
    // 1. 각 단어의 짝수번째 알파벳은 대문자로
    // 2. 홀수번째 알파벳은 소문자로
    const answer = words.map(word => 
                   [...word].map((char, index) => 
                   index % 2 ? char.toLowerCase() : char.toUpperCase())
                   .join(''))
                   .join(' ');
    
    return answer;
}