def power(start):
    global answer

    if start == M:
        return

    answer *= N
    power(start + 1)

for _ in range(1, 11):
    T = int(input())
    N, M = map(int, input().split())
    answer = 1

    power(0)
    print(f'#{T} {answer}')