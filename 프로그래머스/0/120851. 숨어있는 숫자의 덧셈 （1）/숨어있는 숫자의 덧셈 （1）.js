function solution(my_string) {
    let answer = 0;
    
    my_string.split("").map(value => !isNaN(value) ? answer += Number(value) : 0);
    
    return answer;
}