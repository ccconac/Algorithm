function solution(s, n) {
    const answer = [...s].map(char => {
        if (char === ' ') return ' ';
        
        const base = char >= 'A' && char <= 'Z' ? 65 : 97;
        const charCode = (char.charCodeAt(0) - base + n) % 26 + base;
        
        return String.fromCharCode(charCode);
    }).join('');
    
    return answer;
}