function solution(myString) {
    return [...myString].map(value => value < 'l' ? 'l' : value).join('');
}