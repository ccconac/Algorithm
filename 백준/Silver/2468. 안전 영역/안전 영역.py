def dfs(x, y, h):
    stack = [(x, y)]
    safety_zone[x][y] = 1

    while stack:
        x, y = stack.pop()
        for dx, dy in direction:
            nx = x + dx
            ny = y + dy

            if 0 <= nx < N and 0 <= ny < N and not safety_zone[nx][ny] and zones[nx][ny] > h:
                safety_zone[nx][ny] = 1
                stack.append((nx, ny))

N = int(input())
zones = [list(map(int, input().split())) for _ in range(N)]

direction = [[0, 1], [0, -1], [-1, 0], [1, 0]]
max_height = max(max(row) for row in zones)
result = 0

for height in range(max_height + 1):
    answer = 0
    safety_zone = [[0] * N for _ in range(N)]

    for row in range(N):
        for col in range(N):
            if zones[row][col] > height and not safety_zone[row][col]:
                dfs(row, col, height)
                answer += 1

    result = max(result, answer)

print(result)