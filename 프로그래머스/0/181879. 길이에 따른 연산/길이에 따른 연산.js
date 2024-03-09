function solution(num_list) {
    let answer = 0;
    
    if (num_list.length >= 11) {
        answer = sum(num_list);
    } else {
        answer = mul(num_list);
    }
    
    return answer;
}

function sum(num_list) {
    let result = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        result += num_list[i];
    }
    
    return result;
}

function mul(num_list) {
    let result = 1;
    
    for (let i = 0; i < num_list.length; i++) {
        result *= num_list[i];
    }
    
    return result;
}