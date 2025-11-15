from collections import deque

def bfs():
    global queue

    while queue:
        x, y, z = queue.popleft()
        for i in range(6):
            nx = x + dx[i]
            ny = y + dy[i]
            nz = z + dz[i]

            if 0 <= nx < N and 0 <= ny < M and 0 <= nz < H:
                if boxes[nz][nx][ny] == 0:
                    boxes[nz][nx][ny] = boxes[z][x][y] + 1
                    queue.append((nx, ny, nz))

M, N, H = map(int, input().split())
boxes = [[list(map(int, input().split())) for _ in range(N)] for _ in range(H)]

# 위 아래 왼쪽 오른쪽 앞 뒤
dx = [0, 0, 1, -1, 0, 0]
dy = [1, -1, 0, 0, 0, 0]
dz = [0, 0, 0, 0, 1, -1]

queue = deque()

for height in range(H):
    for row in range(N):
        for col in range(M):
            if boxes[height][row][col] == 1:
                queue.append((row, col, height))

bfs()
answer = 0
uncompleted = False

for height in range(H):
    for row in range(N):
        for col in range(M):
            if boxes[height][row][col] == 0:
                uncompleted = True
            answer = max(answer, boxes[height][row][col])

if uncompleted:
    print(-1)
else:
    print(answer - 1)