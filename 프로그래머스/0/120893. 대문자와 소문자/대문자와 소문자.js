function solution(my_string) {
    const answer = [];
    
    [...my_string].forEach(value => {
        if (value === value.toUpperCase()) {
            answer.push(value.toLowerCase());
        } else {
            answer.push(value.toUpperCase());
        }
    })
    
    return answer.join('');
}