function solution(maps) {
    const move = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const n = maps.length;
    const m = maps[0].length; 

    const dist = Array.from({ length: n }, () => Array(m).fill(-1));
    
    function bfs(start) {
        const queue = [];
        
        queue.push(start);
        dist[start[0]][start[1]] = 1;
        
        while (queue.length > 0) {
            const here = queue.shift();
            
            for (const [dx, dy] of move) {
                const row = here[0] + dx;
                const column = here[1] + dy;
                
                if (row < 0 || row >= n || column < 0 || column >= m) continue;
                
                if (maps[row][column] === 0) continue;
                
                if (dist[row][column] === -1) {
                    queue.push([row, column]);
                    dist[row][column] = dist[here[0]][here[1]] + 1;
                }
                
                
            
            }
        }
        
        return dist;
    }
    
    bfs([0, 0]);
    
    return dist[n - 1][m - 1];
}