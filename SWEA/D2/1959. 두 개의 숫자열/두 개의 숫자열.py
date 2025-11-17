T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    A = list(map(int, input().split()))
    B = list(map(int, input().split()))

    # A 배열 길이가 더 작다고 고정
    if len(A) > len(B):
        A, B = B, A
        N, M = M, N

    sums = []

    for i in range(M - N + 1):
        temp_A = A
        temp_B = B[i:i+N]
        result = 0

        for j in range(N):
            result += temp_A[j] * temp_B[j]

        sums.append(result)

    answer = max(sums)
    print(f'#{test_case} {answer}')