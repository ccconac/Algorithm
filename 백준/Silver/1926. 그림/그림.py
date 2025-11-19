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

            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and paper[nx][ny]:
                visited[nx][ny] = 1
                queue.append((nx, ny))

    sizes.append(count)

N, M = map(int, input().split())
dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]

paper = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]

sizes = []
paint_count = 0

for i in range(N):
    for j in range(M):
        if paper[i][j] and not visited[i][j]:
            bfs(i, j)
            paint_count += 1

max_size = max(sizes) if sizes else 0

print(paint_count)
print(max_size)