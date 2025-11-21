T = int(input())

for test_case in range(1, T + 1):
    N = int(input())

    # N명의 학생 조 나누기
    # 2명 이하 => 토론/업무 배분 제대로 이루어지지 않음
    # 3명 이상으로 구성된 조 최대화

    answer = N // 3
    print(f'#{test_case} {answer}')