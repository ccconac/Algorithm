T = int(input())

for test_case in range(1, T + 1):
    A, B = map(int, input().split())
    
    answer = 0
    
    if A > 9 or B > 9:
        answer = -1
    else:
        answer = A * B
        
    print(f'#{test_case} {answer}')