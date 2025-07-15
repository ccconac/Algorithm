function solution(lottos, win_nums) {
    const ranking = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    };
    
    // 0의 개수
    const zeroCount = lottos.filter((num) => num === 0).length;

    // win_nums에 포함된 수의 개수
    const correctCount = lottos.filter((num) => win_nums.includes(num)).length;

    const best = correctCount + zeroCount;
    const worst = correctCount;

    return [ranking[best], ranking[worst]];
}