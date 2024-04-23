function solution(t, p) {
    const arr = [];
    let result = 0;
    
    for (let i = 0; i < t.length; i++) {
        arr.push(t.slice(i, i + p.length));
    }
    
    const numbers = arr.filter(number => number.length === p.length);
    
    numbers.forEach(number => {
        if (Number(number) <= Number(p)) result += 1;
    })
    
    return result;
}