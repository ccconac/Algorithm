def dfs(node):
    dfs_visited[node] = 1
    dfs_answer.append(node)

    for next in sorted(graph[node]):
        if not dfs_visited[next]:
            dfs(next)

def bfs(node):
    queue = [node]
    bfs_visited[node] = 1

    while queue:
        node = queue.pop(0)
        bfs_answer.append(node)

        for next in sorted(graph[node]):
            if not bfs_visited[next]:
                queue.append(next)
                bfs_visited[next] = 1


N, M, V = map(int, input().split()) # 정점, 간선, 탐색 시작 번호
graph = [[] for _ in range(N + 1)]

dfs_visited = [0] * (N + 1)
bfs_visited = [0] * (N + 1)

dfs_answer = []
bfs_answer = []

for _ in range(M):
    start, end = map(int, input().split())
    graph[start].append(end)
    graph[end].append(start)

dfs(V)
bfs(V)

answer = ' '.join(map(str, dfs_answer)) + '\n' + ' '.join(map(str, bfs_answer))

print(answer)