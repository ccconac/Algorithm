function solution(my_string) {
    return [...my_string].filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}
