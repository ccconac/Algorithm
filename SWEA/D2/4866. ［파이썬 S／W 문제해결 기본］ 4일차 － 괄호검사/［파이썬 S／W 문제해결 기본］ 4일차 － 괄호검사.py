T = int(input())

for test_case in range(1, T + 1):
    strings = input()
    mapping = {')': '(', '}': '{'} 
    stack = []
    answer = 1
    
    # 1. {, ( 일 경우 스택에 넣음
    # 2. }, ) 일 경우 스택의 가장 최상단에 있는 것과 비교 후 일치하면 제거
    for c in strings:
        if c == '(' or c =='{': stack.append(c)
        elif c == ')' or c =='}': 
            if stack and stack[-1] == mapping[c]: stack.pop()
            else: 
                answer = 0
                break
    
    if stack: answer = 0
    
    print(f'#{test_case} {answer}')