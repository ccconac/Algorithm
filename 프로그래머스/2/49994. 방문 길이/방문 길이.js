function solution(dirs) {
    // 1. 방향 객체 설정
    const move = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    };
    
    const visited = new Set();
    let x = 0, y = 0;
    
    // 좌표 평면의 경계를 넘어가는 명령어는 무시
    // 처음 걸어본 길의 길이 구하기
    for (const dir of dirs) {
        const [dx, dy] = move[dir];
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx > 5 || nx < -5 || ny < -5 || ny > 5) continue;
        
        visited.add(`${nx}${ny}${x}${y}`);
        visited.add(`${x}${y}${nx}${ny}`);
        
        x = nx;
        y = ny;
    }
    
    return visited.size / 2;
}
