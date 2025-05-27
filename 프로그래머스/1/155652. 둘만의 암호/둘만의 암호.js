function solution(s, skip, index) {
    // s = aukks, skip = wbqd, index = 5일 때 a에서 5만큼 뒤에 있는 알파벳은 f지만
    // b c d e f에서 b와 d는 skip에 포함되므로 세지 않음
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter((char) => !skip.includes(char));   
    
    // 1. 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꾸어 줌
    // 2. index 만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아감
    // 3. skip에 있는 알파벳은 제외하고 건너뜀
    return s
    .split("")
    .map((a) => alphabet[(alphabet.indexOf(a) + index) % alphabet.length])
    .join("");
}