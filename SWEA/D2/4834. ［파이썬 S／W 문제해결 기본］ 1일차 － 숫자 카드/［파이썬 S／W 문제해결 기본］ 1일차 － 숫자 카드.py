T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    cards = list(map(int, input()))
	# 0 ~ 9까지 적힌 카드 N장
    # 가장 많은 카드에 적힌 숫자, 카드 몇 장
    # 단, 카드 장수가 같을 때는 적힌 숫자가 큰 쪽을 출력한다.
    card_count = [0] * 10
    
    for i in range(N):
        card_count[cards[i]] += 1
    
    max_count = max(card_count)
    card_number = 0
    
    for i in range(9, -1, -1):
        if max_count == card_count[i]:
            card_number = i
            break
    
    print(f'#{test_case} {card_number} {max_count}')