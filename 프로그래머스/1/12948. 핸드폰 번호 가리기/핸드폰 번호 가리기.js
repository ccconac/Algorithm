function solution(phone_number) {
    const privateLength = phone_number.length - 4;
    
    let answer = '';
    
    for (let i = 0; i < privateLength; i += 1) answer += '*';
    
    return answer + [...phone_number].splice(privateLength, 4).join('');
}