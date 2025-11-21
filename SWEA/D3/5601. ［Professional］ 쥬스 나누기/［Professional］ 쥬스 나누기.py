T = int(input())

for test_case in range(1, T + 1):
    N = int(input())

    a = 1
    b = N
    juice = []

    for i in range(N):
        juice.append(f'{a}/{b}')

    answer = ' '.join(juice)
    print(f'#{test_case} {answer}')