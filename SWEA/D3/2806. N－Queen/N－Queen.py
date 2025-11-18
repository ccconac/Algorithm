T = int(input())

def is_valid(row):
    for prev in range(row):
        # 열과 대각선 검사
        if board[prev] == board[row] or abs(prev - row) == abs(board[prev] - board[row]):
            return 0
    return 1

def N_Queen(row):
    global count

    if row == N:
        count += 1
        return

    for col in range(N):
        board[row] = col

        if is_valid(row):
            N_Queen(row + 1)

        board[row] = 0


for test_case in range(1, T + 1):
    N = int(input())
    board = [0] * N
    count = 0

    N_Queen(0)
    print(f'#{test_case} {count}')