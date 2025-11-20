def dfs(start):
    if len(stack) == M:
        print(*stack)
        return

    d = set()
    for i in range(start, N):
        if visited[i] or numbers[i] in d:
            continue

        visited[i] = 1
        stack.append(numbers[i])
        d.add(numbers[i])
        dfs(i + 1)
        stack.pop()
        visited[i] = 0



N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))

stack = []
visited = [0] * N

dfs(0)