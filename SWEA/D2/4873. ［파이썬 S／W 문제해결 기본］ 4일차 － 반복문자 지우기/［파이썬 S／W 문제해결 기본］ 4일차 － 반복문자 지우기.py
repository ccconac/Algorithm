T = int(input())

for test_case in range(1, T + 1):
    string = input()
    stack = []

    for c in string:
        if not stack or stack[-1] != c:
            stack.append(c)
        elif stack[-1] == c:
            stack.pop()

    answer = len(stack)
    print(f'#{test_case} {answer}')