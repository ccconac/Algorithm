def dfs():
    if len(stack) == M:
        print(' '.join(map(str, stack)))
        return

    for i in range(1, N + 1):
        if visited[i]:
            continue

        visited[i] = 1
        stack.append(i)
        dfs()
        stack.pop()
        visited[i] = 0

N, M = map(int, input().split())
stack = []
visited = [0] * (N + 1)

dfs()