function solution(array, commands) {
    // i번째부터 j번째까지 자르고 정렬
    // return -> k번째에 있는 수
    return commands.map((command) => {
        const [i, j, k] = command;
        return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    })
}