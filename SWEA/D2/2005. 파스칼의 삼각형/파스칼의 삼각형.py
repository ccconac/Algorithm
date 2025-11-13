T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    pascal = [[0] * N for _ in range(N)]

    pascal[0][0] = 1

    for i in range(1, N):
        for j in range(i + 1):
            if j == 0:
                pascal[i][0] = pascal[i - 1][0]
            elif 0 < j < i:
                pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
            else:
                pascal[i][j] = pascal[i - 1][j - 1]

    print(f'#{test_case}')
    for i in range(N):
        for j in range(i + 1):
            print(pascal[i][j], end=' ')
        print()