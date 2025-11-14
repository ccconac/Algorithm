V = int(input())
E = int(input())
graph = [[] for _ in range(V + 1)]
visited = [0] * (V + 1)

for i in range(E):
    start, end = map(int, input().split())
    graph[start].append(end)
    graph[end].append(start)

def dfs(node):
    visited[node] = 1
    for next in graph[node]:
        if not visited[next]:
            dfs(next)

dfs(1)
answer = sum(visited) - 1
print(answer)