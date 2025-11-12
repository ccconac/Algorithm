T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    zone = [list(map(int, input().split())) for _ in range(N)]

    max_count = 0

    for i in range(N - M + 1):
        for j in range(N - M + 1):
            count = 0

            for row in range(i, i + M):
                for col in range(j, j + M):
                    count += zone[row][col]

            if count > max_count:
                max_count = count

    print(f'#{test_case} {max_count}')