function solution(absolutes, signs) {
    return absolutes.reduce((acc, curr, index) => acc + curr * (signs[index] ? 1 : -1), 0);
}