T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    DP = [0] * (N + 1)

    for i in range(1, N + 1):
        if i == 1:
            DP[i] = 1
        elif i == 2:
            DP[i] = 3
        elif i == 3:
            DP[i] = 6
        else:
            DP[i] = DP[i - 1] + 2 * DP[i - 2] + DP[i - 3]

    print(f'#{test_case} {DP[N]}')