function solution(arr) {
    const min = Math.min(...arr);
    const answer = arr.filter(number => number !== min);
    
    return answer.length ? answer : [-1];
}