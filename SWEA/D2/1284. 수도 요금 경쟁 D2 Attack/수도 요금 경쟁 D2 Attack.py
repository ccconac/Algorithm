T = int(input())

for test_case in range(1, T + 1):
    P, Q, R, S, W = map(int, input().split())

    A = W * P
    B = 0

    # A: P * W
    # B: W <= R: Q, W > R: Q + (W - R) * S
    # 요금이 더 저렴한 회사의 요금 출력

    if W <= R:
        B = Q
    else:
        B = Q + (W - R) * S

    answer = min(A, B)
    print(f'#{test_case} {answer}')