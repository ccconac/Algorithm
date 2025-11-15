T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    arr = [[0] * 10 for _ in range(10)]

    answer = 0

    for i in range(N):
        x1, y1, x2, y2, color = list(map(int, input().split()))

        for row in range(x1, x2 + 1):
            for col in range(y1, y2 + 1):
                arr[row][col] += color
                if arr[row][col] == 3:
                    answer += 1

    print(f'#{test_case} {answer}')