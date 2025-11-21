T = int(input())

for test_case in range(1, T + 1):
    A, B = map(int, input().split())
    N = set(list(map(int, input().split())))
    M = list(map(int, input().split()))

    answer = 0

    for num in M:
        if num in N:
            answer += 1

    print(f'#{test_case} {answer}')