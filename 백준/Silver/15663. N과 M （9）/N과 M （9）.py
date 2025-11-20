def dfs():
    if len(stack) == M:
        print(*stack)
        return

    d = set()
    for i in range(N):
        if visited[i] or numbers[i] in d:
            continue

        visited[i] = 1
        stack.append(numbers[i])
        d.add(numbers[i])
        dfs()
        stack.pop()
        visited[i] = 0


N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))
visited = [0] * N
stack = []

dfs()