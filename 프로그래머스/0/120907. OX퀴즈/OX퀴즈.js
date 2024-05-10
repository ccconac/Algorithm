function solution(quiz) {
    const answer = [];
    
    return quiz.map(exp => {
        const [calc, result] = exp.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return Number(a) + (Number(b) * sign) === Number(result) ? 'O' : 'X';
    });
}