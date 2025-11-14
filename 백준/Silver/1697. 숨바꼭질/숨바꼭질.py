def bfs(node):
    queue = [node]

    while queue:
        current = queue.pop(0)

        if current == K:
            print(visited[current])
            break

        for next in (current - 1, current + 1, current * 2):
            if 0 <= next <= MAX and not visited[next]:
                visited[next] = visited[current] + 1
                queue.append(next)



N, K = map(int, input().split())
MAX = 10 ** 5
visited = [0] * (MAX + 1)

bfs(N)