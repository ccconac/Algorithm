function solution(array, n) {
    const filter = array.filter(number => number === n);
    
    return filter.length;
}