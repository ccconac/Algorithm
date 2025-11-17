T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    answer = [[0] * N for _ in range(N)]

    answer[0][0] = 1

    for i in range(1, N):
        for j in range(i + 1):
            if j == 0 or j == i:
                answer[i][j] = 1
            else:
                answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j]

    print(f'#{test_case}')
    for i in range(N):
        print(' '.join(map(str, answer[i][:i+1])))