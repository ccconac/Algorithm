import sys

board = [list(map(int, input().split())) for _ in range(9)]
empty = []

for i in range(9):
    for j in range(9):
        if board[i][j] == 0:
            empty.append((i, j))

def is_valid(x, y, num):
    for i in range(9):
        # 행/열 검증
        if board[x][i] == num or board[i][y] == num:
            return 0

    # 3x3 사각형 검증
    nx, ny = (x // 3) * 3, (y // 3) * 3
    for i in range(3):
        for j in range(3):
            if board[nx + i][ny + j] == num:
                return 0

    return 1

def dfs(index):
    if index == len(empty):
        for row in board:
            print(*row)
        sys.exit()

    x, y = empty[index]
    for num in range(1, 10):
        if is_valid(x, y, num):
            board[x][y] = num
            dfs(index + 1)
            board[x][y] = 0

dfs(0)