def dfs(node, count):
    global answer

    visited[node] = 1

    if node == target2:
        answer = count
        return

    for next in graph[node]:
        if not visited[next]:
            dfs(next, count + 1)

N = int(input())
target1, target2 = map(int, input().split())
M = int(input())

graph = [[] for _ in range(N + 1)]
visited = [0] * (N + 1)
answer = -1

for _ in range(M):
    start, end = map(int, input().split())
    graph[start].append(end)
    graph[end].append(start)

dfs(target1, 0)

print(answer)