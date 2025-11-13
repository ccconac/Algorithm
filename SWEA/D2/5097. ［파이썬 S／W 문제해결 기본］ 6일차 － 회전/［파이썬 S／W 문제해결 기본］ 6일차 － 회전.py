T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    numbers = list(map(int, input().split()))

    for _ in range(1, M + 1):
        numbers.append(numbers.pop(0))

    print(f'#{test_case} {numbers[0]}')