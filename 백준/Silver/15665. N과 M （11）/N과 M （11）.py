def dfs():
    if len(stack) == M:
        print(*stack)
        return

    d = set()
    for i in range(N):
        if numbers[i] in d:
            continue

        stack.append(numbers[i])
        d.add(numbers[i])
        dfs()
        stack.pop()

N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))

stack = []

dfs()