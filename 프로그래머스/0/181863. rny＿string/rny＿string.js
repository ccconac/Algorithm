function solution(rny_string) {
    return [...rny_string].map(str => str === 'm' ? 'rn' : str).join('');
}