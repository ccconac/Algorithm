def dfs(x, y):
    stack = [(x, y)]
    visited[x][y] = 1

    while stack:
        cx, cy = stack.pop()
        for dx, dy in dir:
            nx = cx + dx
            ny = cy + dy

            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if maze[nx][ny] == 3:
                    return 1

                elif not maze[nx][ny]:
                    visited[nx][ny] = 1
                    stack.append((nx, ny))

    return 0

T = int(input())
dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]

for test_case in range(1, T + 1):
    N = int(input())
    maze = [list(map(int, input().strip())) for _ in range(N)]
    visited = [[0] * N for _ in range(N)]

    answer = 0
    for i in range(N):
        for j in range(N):
            if maze[i][j] == 2:
                answer = dfs(i, j)
                break

    print(f'#{test_case} {answer}')