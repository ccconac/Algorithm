T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    answer = set()
    
    count = 1
    while True:
        for i in str(N * count): 
            answer.add(i)
            
        if len(answer) == 10: break  
        count += 1
    
    print(f'#{test_case} {N * count}')