T = int(input())

def dfs(node):
    stack = [node]
    visited[node] = 1

    while stack:
        current = stack.pop()

        if current == G:
            return 1

        for next in graph[current]:
            if not visited[next]:
                visited[next] = 1
                stack.append(next)

    return 0

for test_case in range(1, T + 1):
    # 노드: V
    # 간선: E
    # 두 개의 노드에 경로 존재하는지 확인 => DFS

    V, E = map(int, input().split())
    graph = [[] for _ in range(V + 1)]
    visited = [0] * (V + 1)

    for _ in range(E):
        start, end = map(int, input().split())
        graph[start].append(end)

    S, G = map(int, input().split())
    answer = dfs(S)

    print(f'#{test_case} {answer}')