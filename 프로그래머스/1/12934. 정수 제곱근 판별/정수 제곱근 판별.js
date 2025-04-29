function solution(n) {
    // n이 어떤 x의 제곱인지 아닌지 판단
    // 1. n이 x의 제곱이라면 x + 1의 제곱을 리턴
    // 2. 아니라면 -1을 리턴
    
    const x = Math.sqrt(n);
    const isNotPow = (x + '').includes('.');
    
    return isNotPow ? -1 : (x + 1) ** 2;
}