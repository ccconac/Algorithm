T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    scores = list(map(int, input().split()))

    score_count = [0] * 101
    answer = 0

    for score in scores:
        score_count[score] += 1
        if score_count[score] >= score_count[answer]:
            answer = score

    print(f'#{test_case} {answer}')