function solution(my_string) {
    return [...my_string].map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('');
}
