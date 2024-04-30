function solution(my_string) {
    return [...my_string]
        .filter((str) => str !== 'a' && str !== 'e' && str !== 'i' && str !== 'o' && str !== 'u').join('');
}