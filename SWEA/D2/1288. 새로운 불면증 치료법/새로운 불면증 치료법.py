T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    answer = set()

    # N의 배수 번호인 양 (N, 2N, ..., kN)
    # 이전에 셌던 번호들의 각 자리수에서 0-9까지 모든 숫자를 보는 경우

    count = 1
    while True:
        for i in str(N * count):
            answer.add(i)

        if len(answer) == 10:
            break

        count += 1

    print(f'#{test_case} {count * N}')