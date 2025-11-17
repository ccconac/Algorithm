T = int(input())

for test_case in range(1, T + 1):
    strings = input()
    mapping = {'}': '{', ')': '('}

    stack = []
    answer = 1

    for c in strings:
        if c == '(' or c == '{':
            stack.append(c)
        elif c == ')' or c == '}':
            if stack and stack[-1] == mapping[c]:
                stack.pop()
            else:
                answer = 0
                break

    if len(stack):
        answer = 0

    print(f'#{test_case} {answer}')