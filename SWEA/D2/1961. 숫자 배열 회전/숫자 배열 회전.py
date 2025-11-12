T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]

    rotate_90 = [[0] * N for _ in range(N)]
    rotate_180 = [[0] * N for _ in range(N)]
    rotate_270 = [[0] * N for _ in range(N)]

    for i in range(N):
        for j in range(N):
            rotate_90[i][j] = arr[N - j - 1][i]

    for i in range(N):
        for j in range(N):
            rotate_180[i][j] = rotate_90[N - j - 1][i]

    for i in range(N):
        for j in range(N):
            rotate_270[i][j] = rotate_180[N - j - 1][i]

    print(f'#{test_case}')
    for i in range(N):
        row_90 = ''.join(map(str, rotate_90[i]))
        row_180 = ''.join(map(str, rotate_180[i]))
        row_270 = ''.join(map(str, rotate_270[i]))

        print(f'{row_90} {row_180} {row_270}')