function solution(my_string) {
    const numbers = my_string.match(/[0-9]+/g);
    
    return numbers ? numbers.map(Number).reduce((acc, curr) => acc + curr, 0) : 0;
}