T = int(input())

for test_case in range(1, T + 1):
    scores = list(map(int, input().split()))

    for i in range(5):
        if scores[i] < 40:
            scores[i] = 40

    answer = sum(scores) // 5
    print(f'#{test_case} {answer}')