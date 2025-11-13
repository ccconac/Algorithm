T = int(input())

for test_case in range(1, T + 1):
    A, B, N = map(int, input().split())

    x, y = A, B
    answer = 0

    # x = A, y = B, N 초과
    while x <= N and y <= N:

        if x > y:
            y += x
            answer += 1
        else:
            x += y
            answer += 1

    print(answer)