T = int(input())

for test_case in range(1, T + 1):
    N = list(map(str, input().strip()))
    init = ['0'] * len(N)

    answer = 0
    while True:
        if N == init:
            break

        for bit in range(len(N)):
            if N[bit] != init[bit]:
                for i in range(bit, len(N)):
                    init[i] = N[bit]
                answer += 1
                continue

    print(f'#{test_case} {answer}')