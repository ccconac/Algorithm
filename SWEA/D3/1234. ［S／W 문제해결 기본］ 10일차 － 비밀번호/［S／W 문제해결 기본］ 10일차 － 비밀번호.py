for test_case in range(1, 11):
    N, string = map(str, input().split())
    stack = []

    for c in string:
        if not len(stack):
            stack.append(c)
        else:
            top = stack[-1]
            if top == c:
                stack.pop()
            else:
                stack.append(c)

    answer = ''.join(stack)
    print(f'#{test_case} {answer}')