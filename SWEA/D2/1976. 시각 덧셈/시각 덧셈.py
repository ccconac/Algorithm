T = int(input())

for test_case in range(1, T + 1):
    H1, M1, H2, M2 = map(int, input().split())

    # 시: 1 ~ 12, 분: 0 ~ 59
    H, M = 0, 0

    if H1 + H2 > 12:
        H = H1 + H2 - 12
    else:
        H = H1 + H2

    if M1 + M2 > 59:
        H += 1
        M = M1 + M2 - 60
    else:
        M = M1 + M2

    print(f'#{test_case} {H} {M}')