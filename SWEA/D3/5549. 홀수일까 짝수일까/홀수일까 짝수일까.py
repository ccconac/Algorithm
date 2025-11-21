T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    answer = ''

    if N % 2:
        answer = 'Odd'
    else:
        answer = 'Even'

    print(f'#{test_case} {answer}')