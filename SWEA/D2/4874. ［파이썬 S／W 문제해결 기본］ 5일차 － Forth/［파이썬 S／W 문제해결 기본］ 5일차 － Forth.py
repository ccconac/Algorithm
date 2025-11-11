T = int(input())

for test_case in range(1, T + 1):
    forth = list(input().split())
    stack = []
    isError = False
    operators = {
        '+': lambda x, y: x + y,
        '-': lambda x, y: x - y,
        '*': lambda x, y: x * y,
        '/': lambda x, y: x // y,
    }

    answer = ''

    for command in forth:
        if command.isdigit(): stack.append(int(command))
        elif command in operators:
            if len(stack) < 2:
                isError = True
                break
                
            b = stack.pop()
            a = stack.pop()
            stack.append(operators[command](a, b))
        elif command == '.':
            if len(stack) == 1: answer = stack.pop()
            else: isError = True
        else: isError = True

    if isError: answer = 'error'
    print(f'#{test_case} {answer}')
