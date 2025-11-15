T = int(input())
dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

for test_case in range(1, T + 1):
    M1, D1, M2, D2 = map(int, input().split())

    # 두 번째 날짜가 첫 번째 날짜의 며칠째인지 출력
    answer = 0
    for month in range(M1, M2):
        answer += dates[month]

    answer += D2 - D1 + 1

    print(f'#{test_case} {answer}')