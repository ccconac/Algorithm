# 청소되지 않은 빈 칸 없을 경우 후진 (1)
# 단, 후진 시 뒤가 벽이라 불가능하면 작동 멈춤

# 청소되지 않은 빈 칸 있을 경우 (0)
# 반시계 방향으로 90도 회전
# 앞쪽 칸 청소되어 있지 않으면 전진

# 작동을 멈출 때까지 청소하는 칸의 개수 출력 (dfs)
def dfs(x, y, d):
    count = 0

    while True:
        if not visited[x][y] and not rooms[x][y]:
            visited[x][y] = 1
            count += 1

        isMoved = False
        for _ in range(4):
            d = (d + 3) % 4 # 반시계 방향으로 회전
            nx = x + direction[d][0]
            ny = y + direction[d][1]

            if 0 <= nx < N and 0 <= ny < M and not visited[nx][ny] and not rooms[nx][ny]:
                x, y = nx, ny
                isMoved = True
                break

        if not isMoved:
            bx = x - direction[d][0]
            by = y - direction[d][1]

            if 0 <= bx < N and 0 <= by < M and not rooms[bx][by]:
                x, y = bx, by
            else:
                break

    return count


N, M = map(int, input().split())
x, y, d = map(int, input().split())
rooms = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]

direction = [[-1, 0], [0, 1], [1, 0], [0, -1]] # 시계 회전 방향 (0, 1, 2, 3 상우하좌)

answer = dfs(x, y, d)

print(answer)