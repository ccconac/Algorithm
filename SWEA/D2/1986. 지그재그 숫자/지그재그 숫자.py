T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    answer = 0

    for num in range(1, N + 1):
        if num % 2:
            answer += num
        else:
            answer -= num

    print(f'#{test_case} {answer}')