T = int(input())

for test_case in range(1, T + 1): 
    N, number = list(input().split())
    answer = ''
    
    for num in number:
        binary = format(int(num, 16), '04b')
        answer += binary
        
    print(f'#{test_case} {answer}')