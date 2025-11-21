T = int(input())

for test_case in range(1, T + 1):
    N, M, L = map(int, input().split())
    graph = [0 for _ in range(N + 1)]

    for i in range(M):
        node, num = map(int, input().split())
        graph[node] = num

    for i in range(N, 0, -1):
        if N // 2 > 0:
            graph[i // 2] += graph[i]

    print(f'#{test_case} {graph[L]}')