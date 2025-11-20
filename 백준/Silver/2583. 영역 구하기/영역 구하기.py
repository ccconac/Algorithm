from collections import deque

def bfs(x, y):
    count = 0
    queue = deque([(x, y)])
    visited[x][y] = 1

    while queue:
        cx, cy = queue.popleft()
        count += 1
        for dx, dy in dir:
            nx = cx + dx
            ny = cy + dy

            if 0 <= nx < M and 0 <= ny < N and not paper[nx][ny] and not visited[nx][ny]:
                visited[nx][ny] = 1
                queue.append((nx, ny))

    sizes.append(count)

M, N, K = map(int, input().split())
paper = [[0] * N for _ in range(M)]
visited = [[0] * N for _ in range(M)]

dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]
sizes = []

for _ in range(K):
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(x1, x2):
        for j in range(y1, y2):
            paper[j][i] = 1

count = 0
for i in range(M):
    for j in range(N):
        if not paper[i][j] and not visited[i][j]:
            bfs(i, j)
            count += 1

print(count)
print(' '.join(map(str, sorted(sizes))))