def dfs():
    if len(stack) == M:
        print(' '.join(map(str, stack)))
        return

    for num in sorted(numbers):
        if visited[num]:
            continue

        visited[num] = 1
        stack.append(num)
        dfs()
        stack.pop()
        visited[num] = 0


N, M = map(int, input().split())
numbers = list(map(int, input().split()))
visited = [0] * 10001
stack = []

dfs()