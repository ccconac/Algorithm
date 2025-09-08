function solution(dirs) {
    // 1. 캐릭터 방향 객체 생성
    const move = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0]
    };
    
    // 2. 캐릭터의 방문 경로를 담을 객체 생성 (중복 비허용)
    const visited = new Set();
    let x = 0, y = 0;
    
    for (const dir of dirs) {
        const [dx, dy] = move[dir];
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        
        visited.add(`${nx}${ny}${x}${y}`);
        visited.add(`${x}${y}${nx}${ny}`);
        
        x = nx;
        y = ny;
    }
    
    return visited.size / 2;
}
