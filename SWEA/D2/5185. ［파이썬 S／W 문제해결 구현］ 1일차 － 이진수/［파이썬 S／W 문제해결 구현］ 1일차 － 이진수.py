T = int(input())

for test_case in range(1, T + 1):
    N, numbers = map(str, input().split())

    answer = ''
    for num in numbers:
        answer += format(int(num, 16), '04b')

    print(f'#{test_case} {answer}')