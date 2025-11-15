T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    A = list(map(int, input().strip()))
    cards = [0] * 10

    for i in A:
        cards[i] += 1

    max_count = max(cards)
    max_value = 0

    for i in range(9, -1, -1):
        if cards[i] == max_count:
            max_value = i
            break

    print(f'#{test_case} {max_value} {max_count}')