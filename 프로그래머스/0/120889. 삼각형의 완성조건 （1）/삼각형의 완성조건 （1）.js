function solution(sides) {
    const longSide = sides.sort().pop();
    const sideSum = sides.reduce((acc, curr) => acc + curr, 0);
    
    return longSide < sideSum ? 1 : 2;
}