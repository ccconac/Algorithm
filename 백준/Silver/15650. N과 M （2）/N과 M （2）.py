def dfs(start):
    if len(stack) == M:
        print(' '.join(map(str, stack)))
        return

    for i in range(start, N + 1):
        if visited[i]:
            continue

        visited[i] = 1
        stack.append(i)
        dfs(i + 1)
        stack.pop()
        visited[i] = 0

N, M = map(int, input().split())
stack = []
visited = [0] * (N + 1)

dfs(1)