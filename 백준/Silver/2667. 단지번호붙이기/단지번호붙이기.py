N = int(input())
arr = [list(map(int, input().strip())) for _ in range(N)]
visited = [[0] * N for _ in range(N)]
dir = [[0, 1], [0, -1], [-1, 0], [1, 0]]
answer = []

def dfs(x, y):
    count = 1
    stack = [(x, y)]
    visited[x][y] = 1
    
    while stack:
        x, y = stack.pop()
        for dx, dy in dir:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N and arr[nx][ny] == 1 and not visited[nx][ny]:
                visited[nx][ny] = 1
                stack.append((nx, ny))
                count += 1

    return count

for i in range(N):
    for j in range(N):
        if arr[i][j] == 1 and not visited[i][j]:
            answer.append(dfs(i, j))

print(len(answer))
for cnt in sorted(answer):
    print(cnt)