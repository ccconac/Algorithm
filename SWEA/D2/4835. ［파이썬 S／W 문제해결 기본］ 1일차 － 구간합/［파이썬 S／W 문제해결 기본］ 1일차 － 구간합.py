T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    A = list(map(int, input().split()))

    # 이웃한 M개의 합
    sums = []
    for i in range(N - M + 1):
        temp = sum(A[i:i+M])
        sums.append(temp)

    answer = max(sums) - min(sums)
    print(f'#{test_case} {answer}')
