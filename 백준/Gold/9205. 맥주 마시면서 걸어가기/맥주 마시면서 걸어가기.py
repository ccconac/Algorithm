from collections import deque

def bfs(location, N):
    queue = deque([0])

    while queue:
        current = queue.popleft()
        x1, y1 = location[current]

        if current == N + 1:
            return 'happy'

        for next in range(1, N + 2):
            if not visited[next]:
                x2, y2 = location[next]
                if abs(x1 - x2) + abs(y1 - y2) <= 1000:
                    visited[next] = 1
                    queue.append(next)

    return 'sad'

T = int(input())

for _ in range(T):
    N = int(input()) # 편의점 개수
    location = [list(map(int, input().split())) for _ in range(N + 2)]
    visited = [0] * (N + 2)

    print(bfs(location, N))