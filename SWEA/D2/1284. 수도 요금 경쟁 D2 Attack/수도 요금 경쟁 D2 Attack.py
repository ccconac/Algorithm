T = int(input())

for test_case in range(1, T + 1):
    P, Q, R, S, W = map(int, input().split())
    
    # A사: 1L -> P
    # B사: R 이하: Q, R 초과: 1L -> S
	# 종민이가 사용하는 수도 W(L)
    # 요금 출력
    
    A = W * P
    B = 0
    result = 0
    if W <= R: B = Q
    else: B = Q + (W - R)*S
        
    if A > B: result = B
    else: result = A
        
    print('#{} {}'.format(test_case, result))