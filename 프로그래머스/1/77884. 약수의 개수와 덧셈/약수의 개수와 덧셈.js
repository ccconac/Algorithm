function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i += 1) {
        const sqrt = Math.sqrt(i);

        if (Number.isInteger(sqrt)) answer -= i; 
        else answer += i;
    }

    return answer;
}
