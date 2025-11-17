T = int(input())

def check_numbers():
    # 1. 행 검사, 열 검사
    for i in range(9):
        row_numbers = [0] * 9
        col_numbers = [0] * 9
        for j in range(9):
            row_index = puzzle[i][j] - 1
            col_index = puzzle[j][i] - 1

            if row_numbers[row_index]:
                return 0

            if col_numbers[col_index]:
                return 0

            row_numbers[row_index] = 1
            col_numbers[col_index] = 1

    # 2. 3x3 격자 검사
    for block_row in range(0, 9, 3):
        for block_col in range(0, 9, 3):
            square = [0] * 9

            for row in range(block_row, block_row + 3):
                for col in range(block_col, block_col + 3):
                    index = puzzle[row][col] - 1

                    if square[index]:
                        return 0

                    square[index] = 1

    return 1

for test_case in range(1, T + 1):
    puzzle = [list(map(int, input().split())) for _ in range(9)]
    answer = check_numbers()

    print(f'#{test_case} {answer}')