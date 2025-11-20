def dfs(start):
    global count

    if len(stack) > 0 and sum(stack) == S:
        count += 1

    for i in range(start, N):
        stack.append(numbers[i])
        dfs(i + 1)
        stack.pop()


N, S = map(int, input().split())
numbers = list(map(int, input().split()))

stack = []
count = 0

visited = [0] * N
dfs(0)

print(count)