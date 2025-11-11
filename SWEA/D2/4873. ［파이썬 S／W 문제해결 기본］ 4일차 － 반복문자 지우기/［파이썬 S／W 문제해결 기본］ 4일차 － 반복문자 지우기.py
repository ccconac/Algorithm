T = int(input())

for test_case in range(1, T + 1):
    strings = input()
    stack = []
    '''
	다음은 CAAABBA에서 반복문자를 지우는 경우의 예이다.
 
	CAAABBA 연속 문자 AA를 지우고 C와 A를 잇는다.
	CABBA 연속 문자 BB를 지우고 A와 A를 잇는다.
	CAA 연속 문자 AA를 지운다.
	C 1글자가 남았으므로 1을 리턴한다.
    '''
    
    # 1. 스택이 비어 있는 경우
    	# 1-1. 문자 push
    # 2. 스택에 문자가 있는 경우
   		# 2-1. 최상단의 문자가 현재 문자와 다를 경우 push
    # 2. 최상단의 문자열이 현재 문자열과 같을 경우 pop
    # 3. stack에 남아 있는 문자열의 길이 출력
    for c in strings:
        if not stack:
            stack.append(c)
        else:
            top = stack[-1]
            if c == top: stack.pop()
            else: stack.append(c)
                
    answer = len(stack)
    print(f'#{test_case} {answer}')
            
        