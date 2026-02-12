# N - 1개의 동영상 쌍을 골라 반드시 경로 하나 존재
# 경로의 모든 연결들의 USADO 중 최솟값 = 2쌍 사이 USADO
# K 이상인 모든 동영상 추천되도록 함 -> BFS

import sys
from collections import deque

input = sys.stdin.readline

N, Q = map(int, input().split())

graph = [[] for _ in range(N + 1)]

for _ in range(N - 1):
    video_a, video_b, weight = map(int, input().split())
    graph[video_a].append((video_b, weight))
    graph[video_b].append((video_a, weight))

for _ in range(Q):
    k, start_node = map(int, input().split())
    
    visited = [False] * (N + 1)
    visited[start_node] = True
    
    count = 0
    queue = deque([start_node])

    while queue:
        curr_node = queue.popleft()

        for neighbor, weight in graph[curr_node]:
            if not visited[neighbor] and weight >= k:
                visited[neighbor] = True
                queue.append(neighbor)
                count += 1

    print(count)