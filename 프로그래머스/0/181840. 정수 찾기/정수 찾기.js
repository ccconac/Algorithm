function solution(num_list, n) {
    let answer = 0;
    
    if (num_list.includes(n)) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}