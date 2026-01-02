from collections import deque

def bfs(x, y):
    queue = deque([(x, y)])
    visited[x][y] = 1

    while queue:
        cx, cy = queue.popleft()
        for dx, dy in dir:
            nx = cx + dx
            ny = cy + dy

            if 0 <= nx < M and 0 <= ny < N and farm[nx][ny] == 1 and not visited[nx][ny]:
                visited[nx][ny] = 1
                queue.append((nx, ny))

T = int(input())
dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]

for _ in range(T):
    M, N, K = map(int, input().split())
    farm = [[0] * N for _ in range(M)]
    visited = [[0] * N for _ in range(M)]

    for _ in range(K):
        X, Y = map(int, input().split())
        farm[X][Y] = 1

    answer = 0

    for row in range(M):
        for col in range(N):
            if farm[row][col] == 1 and not visited[row][col]:
                bfs(row, col)
                answer += 1

    print(answer)