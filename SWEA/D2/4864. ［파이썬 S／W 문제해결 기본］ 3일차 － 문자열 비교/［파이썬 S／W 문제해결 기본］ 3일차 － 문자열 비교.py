T = int(input())

for test_case in range(1, T + 1):
    str1 = input()
    str2 = input()
    
    N, M = len(str1), len(str2)
    '''
    문자열 str2 안에 str1과 일치하는 부분 있는지
    첫 문자열이 두번째에 존재하면 1, 존재하지 않으면 0을 출력
    '''
    answer = 0
    
    for i in range(M - N + 1):
        word = str2[i:i+N]
        if word == str1: answer = 1
  	
    print(f'#{test_case} {answer}')
        
    