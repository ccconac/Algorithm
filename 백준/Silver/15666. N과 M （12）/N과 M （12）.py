def dfs(start):
    if len(stack) == M:
        print(*stack)
        return

    d = set()
    for i in range(start, N):
        if numbers[i] in d:
            continue

        stack.append(numbers[i])
        d.add(numbers[i])
        dfs(i)
        stack.pop()

N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))
stack = []

dfs(0)