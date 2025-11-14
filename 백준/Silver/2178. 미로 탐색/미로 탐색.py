def bfs(x, y):
    queue = [(x, y)]

    while queue:
        x, y = queue.pop(0)
        for i in range(4):
            nx = x + dir[i][0]
            ny = y + dir[i][1]
            if 0 <= nx < N and 0 <= ny < M and maze[nx][ny] == 1:
                maze[nx][ny] = maze[x][y] + 1
                queue.append((nx, ny))

N, M = map(int, input().split())
maze = [list(map(int, input().strip())) for _ in range(N)]
dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]

bfs(0, 0)

print(maze[N - 1][M - 1])