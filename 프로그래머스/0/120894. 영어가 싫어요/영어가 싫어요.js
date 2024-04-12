function solution(numbers) {
    const NUMBER_ARRAY = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    NUMBER_ARRAY.forEach((value, index) => {
        numbers = numbers.replaceAll(value, index);
    });
    
    return Number(numbers);
}