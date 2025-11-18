import sys

def dfs(team, start):
    global answer

    # 팀이 반반으로 나뉘었을 경우
    if team == N // 2:
        team_start = 0
        team_link = 0

        for i in range(N):
            for j in range(N):
                if visited[i] and visited[j]:
                    team_start += S[i][j]

                elif not visited[i] and not visited[j]:
                    team_link += S[i][j]

        answer = min(answer, abs(team_start - team_link))
        return

    else:
        # 나뉘지 않았다면 인원 나누기
        for i in range(start, N):
            if visited[i]:
                continue

            visited[i] = 1
            dfs(team + 1, i + 1)
            visited[i] = 0


N = int(input())
S = [list(map(int, input().split())) for _ in range(N)]
visited = [0] * (N + 1)
answer = sys.maxsize

dfs(0, 0)
print(answer)