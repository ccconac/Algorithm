N = int(input())
board = [0] * (N + 1)
count = 0

def is_valid(row):
    for prev in range(row):
        if board[prev] == board[row] or abs(board[prev] - board[row]) == abs(prev - row):
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

N_Queen(0)
print(count)