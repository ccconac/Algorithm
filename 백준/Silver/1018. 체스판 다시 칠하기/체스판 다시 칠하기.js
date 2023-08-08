const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const chessboard = [];

let result = Number.MAX_SAFE_INTEGER;; 

for (let i = 1; i <= N; i++) {
    chessboard.push(input[i].split(""));
}

const whiteFirst = (i, j) => {
    let count = 0;
    for (let N = i; N < i + 8; N++) {
        for (let M = j; M < j + 8; M++) {
            if ((N + M) % 2 === 0) {
                count = chessboard[N][M] === "B" ? count + 1 : count;
            } else {
                count = chessboard[N][M] === "W" ? count + 1 : count;
            }
        }
    }
    return count;
}

const blackFirst = (i, j) => {
    let count = 0;
    for (let N = i; N < i + 8; N++) {
        for (let M = j; M < j + 8; M++) {
            if ((N + M) % 2 === 0) {
                count = chessboard[N][M] === "W" ? count + 1 : count;
            } else {
                count = chessboard[N][M] === "B" ? count + 1 : count;
            }
        }
    }
    return count;
}

for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++) {
        const whiteFirstB = whiteFirst(i, j);
        const blackFirstB = blackFirst(i, j);

        const min = Math.min(whiteFirstB, blackFirstB); 
        result = Math.min(result, min); 
    }
}

console.log(result);