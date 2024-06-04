function solution(n) {
    return String(n).split('').reduce((acc, curr) => acc + curr * 1, 0);
}