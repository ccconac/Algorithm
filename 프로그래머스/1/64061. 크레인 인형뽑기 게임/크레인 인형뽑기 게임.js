function solution(board, moves) {
    // board 변환
    const lanes = [...Array(board[0].length)].map(() => []);

    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j]) lanes[j].push(board[i][j]);
        }
    }
    
    const bucket = [];
    let answer = 0;
    
    for (let i = 0; i < moves.length; i++) {
        if (lanes[moves[i] - 1].length) {
            const doll = lanes[moves[i] - 1].pop();
            
            if (bucket.length && doll === bucket[bucket.length - 1]) {
                bucket.pop();
                answer += 2;
            } else bucket.push(doll);
            
        }
    }
    
    return answer;
}
