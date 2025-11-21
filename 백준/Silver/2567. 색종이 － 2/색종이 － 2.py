def circulate():
    global result

    for i in range(101):
        for j in range(101):
            if paper[i][j] == 1:
                for dx, dy in dir:
                    nx = i + dx
                    ny = j + dy

                    if 0 <= nx < 101 and 0 <= ny < 101 and not paper[nx][ny]:
                        result += 1
                        
# 가로 x 세로 각각 크기 100 도화지
# 가로 x 세로 각각 크기 10인 색종이

N = int(input())
paper = [[0] * 101 for _ in range(101)]

dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]
result = 0

for _ in range(N):
    x, y = map(int, input().split())

    for i in range(x, x + 10):
        for j in range(y, y + 10):
            paper[i][j] = 1

circulate()
print(result)