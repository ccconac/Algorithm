def dfs(start):
    if len(stack) == M:
        print(*stack)
        return

    for i in range(start, N):
        if visited[i]:
            continue

        visited[i] = 1
        stack.append(numbers[i])
        dfs(i + 1)
        stack.pop()
        visited[i] = 0


N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))
visited = [0] * N
stack = []

dfs(0)