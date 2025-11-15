T = int(input())
dir = [[0, 1], [1, 0], [0, -1], [-1, 0]] # 우, 하, 좌, 상

for test_case in range(1, T + 1):
    N = int(input())
    snail = [[0] * N for _ in range(N)]

    x, y = 0, 0
    distance = 0

    for number in range(1, N * N + 1):
        snail[x][y] = number
        nx = x + dir[distance][0]
        ny = y + dir[distance][1]

        if nx < 0 or ny < 0 or nx >= N or ny >= N or snail[nx][ny]:
            distance = (distance + 1) % 4
            nx = x + dir[distance][0]
            ny = y + dir[distance][1]

        x, y = nx, ny

    print(f'#{test_case}')
    for row in snail:
        print(' '.join(map(str, row)))