function solution(babbling) {
    let answer = 0;
    
    babbling.forEach(value => {
        if (value.replace('aya', ' ').replace('ye', ' ').replace('woo', ' ')
            .replace('ma', ' ').trim() === '') answer += 1;
    })
    
    return answer;
}