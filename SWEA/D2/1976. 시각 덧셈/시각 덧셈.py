T = int(input())

for test_case in range(1, T + 1):
    H1, M1, H2, M2 = map(int, input().split())
    '''
    시 분으로 이루어진 시각을 2개 입력 받아, 더한 값을 시 분으로 출력하는 프로그램을 작성하라.
	(시: 12시간제, 1-12)
    '''
    time = [0, 0]
    
    # 1. H1 + H2 > 12 => H1 + H2 - 12
    # 2. M1 + M2 > 60 => M1 + M2 - 60, H + 1
    if H1 + H2 > 12:
        time[0] = H1 + H2 - 12
    else:
        time[0] = H1 + H2
    if M1 + M2 >= 60:
        time[0] += 1
        time[1] = M1 + M2 - 60
    else:
        time[1] = M1 + M2
    
    answer = ' '.join(map(str, time))
    print(f'#{test_case} {answer}')
    
        