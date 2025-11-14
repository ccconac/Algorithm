def bfs(node):
    queue = [node]
    visited[node] = 1

    while queue:
        floor = queue.pop(0)

        if floor == G:
            return visited[floor] - 1

        for next in (floor + U, floor - D):
            if 1 <= next <= F and not visited[next]:
                visited[next] = visited[floor] + 1
                queue.append(next)

    return 'use the stairs'

F, S, G, U, D = map(int, input().split()) # F층의 G층에 있음, S층부터 시작
visited = [0] * (F + 1)

print(bfs(S))