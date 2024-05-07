function solution(rsp) {
    const rspArray = {
        2: 0,
        0: 5,
        5: 2
    };
    
    return [...rsp].map(value => rspArray[value]).join('');
}