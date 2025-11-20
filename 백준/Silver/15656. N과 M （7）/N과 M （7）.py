def dfs():
    if len(stack) == M:
        print(*stack)
        return
    
    for i in range(N):
        stack.append(numbers[i])
        dfs()
        stack.pop()

N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))
stack = []

dfs()