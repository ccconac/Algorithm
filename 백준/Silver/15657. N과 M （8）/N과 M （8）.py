def dfs(start):
    if len(stack) == M:
        print(*stack)
        return

    for i in range(start, N):
        stack.append(numbers[i])
        dfs(i)
        stack.pop()

N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))
stack = []

dfs(0)