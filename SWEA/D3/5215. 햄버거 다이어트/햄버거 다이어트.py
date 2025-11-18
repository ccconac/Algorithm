T = int(input())

def dfs(index, score, kal):
    global answer

    if kal > L:
        return

    if index == N:
        answer = max(answer, score)
        return

    # 현재 재료를 선택하는 경우
    dfs(index + 1, score + ingredients[index][0], kal + ingredients[index][1])

    # 현재 재료를 선택하지 않는 경우
    dfs(index + 1, score, kal)

for test_case in range(1, T + 1):
    N, L = map(int, input().split()) # 재료의 수, 제한 칼로리
    ingredients = [list(map(int, input().split())) for _ in range(N)]
    answer = 0

    dfs(0, 0, 0)

    print(f'#{test_case} {answer}')