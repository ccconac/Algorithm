T = int(input())
dir = [[-1, 0], [1, 0], [0, -1], [0, 1]] # 상하좌우

def dfs():
    while stack:
        x, y = stack.pop()
        visited[x][y] = 1

        for dx, dy in dir:
            nx = x + dx
            ny = y + dy

            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if maze[nx][ny] == 3:
                    return 1
                elif not maze[nx][ny]:
                    stack.append((nx, ny))
                    visited[nx][ny] = 1

    return 0

for test_case in range(1, T + 1):
    N = int(input())
    maze = [list(map(int, input().strip())) for _ in range(N)]
    visited = [[0] * N for _ in range(N)]
    stack = []

    for i in range(N):
        for j in range(N):
            if maze[i][j] == 2:
                stack.append((i, j))
                break

    answer = dfs()
    print(f'#{test_case} {answer}')