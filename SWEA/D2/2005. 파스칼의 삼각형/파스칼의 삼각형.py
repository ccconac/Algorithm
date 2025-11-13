T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    pascal = [[0] * N for _ in range(N)]

    for i in range(N):
        for j in range(i + 1):
            if j == 0 or j == i:
                pascal[i][j] = 1
            else:
                pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]

    print(f'#{test_case}')
    for i in range(N):
        print(' '.join(map(str, pascal[i][:i+1])))