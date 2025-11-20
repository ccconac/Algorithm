def dfs(start):
    if len(stack) == 6:
        print(*stack)
        return

    for i in range(start, S_length):
        stack.append(S[i])
        dfs(i + 1)
        stack.pop()

while True:
    test_case = list(map(int, input().split()))

    k = test_case[0]

    if k == 0:
        exit()

    S = test_case[1:]
    S_length = len(S)
    stack = []

    dfs(0)
    print()