T = int(input())

for _ in range(1, T + 1):
    A, B, N = map(int, input().split())
    x, y = A, B
    answer = 0
    
    while x <= N and y <= N:
        if x > y:
            y += x
        else:
            x += y

        answer += 1

    print(answer)