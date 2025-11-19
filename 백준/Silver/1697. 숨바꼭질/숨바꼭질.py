from collections import deque

def bfs(node):
    queue = deque([node])
    visited[node] = 1

    while queue:
        current = queue.popleft()

        if current == K:
            return

        for next in (current + 1, current - 1, current * 2):
            if 0 <= next <= MAX and not visited[next]:
                visited[next] = visited[current] + 1
                queue.append(next)

N, K = map(int, input().split())
MAX = 10 ** 5
visited = [0] * (MAX + 1)

bfs(N)
answer = visited[K] - 1

print(answer)