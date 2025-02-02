function solution(n, computers) {
    const visited = [];
    let count = 0;
    
    function dfs(node) {
        visited.push(node);

        for (let i = 0; i < n; i++) {
            if (!visited.includes(i) && computers[node][i]) dfs(i);
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited.includes(i)) {
            dfs(i);
            count += 1;
        }
    }
    
    return count;
}