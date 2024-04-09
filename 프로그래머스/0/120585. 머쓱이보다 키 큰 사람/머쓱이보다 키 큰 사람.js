function solution(array, height) {
    return array.filter(number => number > height).length;
}