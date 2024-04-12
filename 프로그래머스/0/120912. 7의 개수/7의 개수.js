function solution(array) {
    return array.join().split('').filter(value => {return value === '7'}).length;
}