T = int(input())

for test_case in range(1, T + 1):
    a, b, c = sorted(map(int, input().split()))
    answer = 0

    if a == b == c:
        answer = a

    if a != b:
        answer = a
    else:
        answer = c

    print(f'#{test_case} {answer}')