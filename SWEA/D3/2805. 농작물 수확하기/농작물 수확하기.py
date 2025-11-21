T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    farm = [list(map(int, input().strip())) for _ in range(N)]
    answer = 0

    for i in range(N // 2):
        answer += sum(farm[i][N // 2 - i:N // 2 + i + 1])

        temp = N // 2 + i + 1
        answer += sum(farm[temp][N // 2 - (N - 1 - temp):N // 2 + (N - temp)])

    answer += sum(farm[N // 2])
    print(f'#{test_case} {answer}')