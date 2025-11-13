T = int(input())

for test_case in range(1, T + 1):
    numbers = list(map(int, input().split()))
    numbers.sort()

    length = len(numbers)

    number_sum = sum(numbers[1:-1])
    answer = round(number_sum / 8)

    print(f'#{test_case} {answer}')