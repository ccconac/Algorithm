for test_case in range(1, 11):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]
    sums = []

    # 행
    for i in range(100):
        row_sum = sum(arr[i][:100])
        sums.append(row_sum)

    # 열
    for i in range(100):
        col_sum = 0
        for j in range(100):
            col_sum += arr[j][i]

        sums.append(col_sum)

    # 대각선 ->
    diagonal_1 = 0
    diagonal_2 = 0
    for i in range(100):
        diagonal_1 += arr[i][i]
        diagonal_2 += arr[i][99 - i]

    sums.append(diagonal_1)
    sums.append(diagonal_2)

    answer = max(sums)
    print(f'#{test_case} {answer}')