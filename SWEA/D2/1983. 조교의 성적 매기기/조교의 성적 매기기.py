T = int(input())
grades = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']

for test_case in range(1, T + 1):
    N, K = map(int, input().split())
    scores = [list(map(int, input().split())) for _ in range(N)]
    totals = []

    # 평점 10개
    # 중간 0.35 + 기말 0.45 + 과제 0.20
    # N / 10 명의 학생들에게 동일한 평점 부여 가능

    # 87, 59, 88이라고 할 때
    for score in scores:
        total = score[0] * 0.35 + score[1] * 0.45 + score[2] * 0.2
        totals.append(total)

    ratio = N // 10
    student = totals[K - 1]

    totals.sort(reverse=True)
    target = totals.index(student)
    answer = grades[target // ratio]

    print(f'#{test_case} {answer}')