T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    prices = list(map(int, input().split()))

    max = 0
    answer = 0
    
    # 1. 미래의 값을 알아야 함 (reversed)
    for price in reversed(prices):
        if max < price: max = price
        # 2. 미래 값이 현재 값보다 클 경우 이익 실현
        answer += max - price
    
    print(f'#{test_case} {answer}')