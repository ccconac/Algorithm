T = int(input())
operator = {
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
    '*': lambda x, y: x * y,
    '/': lambda x, y: x // y
}

for test_case in range(1, T + 1):
    problem = list(input().split())
    stack = []
    answer = ''

    # 1. 숫자라면 스택에 넣음
    # 2. 연산자를 만난다면
    # 2-1. 스택에서 숫자 두 개를 꺼냄
    # 2-2. 연산을 함
    # 2-3. 결과를 다시 스택에 넣음
    # 2-4. 단, 형식이 잘못되어 계산이 불가능하다면 error 처리
    # 3. 온점이라면 숫자 꺼내 출력
    for command in problem:
        if command.isdigit():
            stack.append(command)
        elif command == '.':
            if len(stack) == 1:
                answer = stack.pop()
            else:
                answer = 'error'
        else:
            if len(stack) < 2:
                answer = 'error'
                break

            b = int(stack.pop())
            a = int(stack.pop())

            result = operator[command](a, b)
            stack.append(result)

    print(f'#{test_case} {answer}')