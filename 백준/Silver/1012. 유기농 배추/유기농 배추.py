from collections import deque

def bfs(x, y):
    queue = deque([(x, y)])
    visited[x][y] = 1

    while queue:
        cx, cy = queue.popleft()
        for dx, dy in dir:
            nx = cx + dx
            ny = cy + dy

            if 0 <= nx < N and 0 <= ny < M and farm[nx][ny] and not visited[nx][ny]:
                farm[nx][ny] = 1
                visited[nx][ny] = 1
                queue.append((nx, ny))

T = int(input())
dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]

for _ in range(T):
    M, N, K = map(int, input().split())
    farm = [[0] * M for _ in range(N)]
    visited = [[0] * M for _ in range(N)]

    answer = 0

    for _ in range(K):
        Y, X = map(int, input().split())
        farm[X][Y] = 1

    for i in range(N):
        for j in range(M):
            if farm[i][j] == 1 and not visited[i][j]:
                bfs(i, j)
                answer += 1

    print(answer)