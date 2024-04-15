function solution(s) {
    const answer = [];
    
    for (character of s) {
        if (s.indexOf(character) === s.lastIndexOf(character)) {
            answer.push(character);
        }   
    }
    
    return answer.sort().join('');
}