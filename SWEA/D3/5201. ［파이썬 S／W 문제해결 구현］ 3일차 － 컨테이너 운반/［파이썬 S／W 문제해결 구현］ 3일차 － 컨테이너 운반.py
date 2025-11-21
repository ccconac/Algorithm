T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split()) # 컨테이너 수, 트럭 수
    W = sorted(list(map(int, input().split())), reverse=True) # 무게
    T = sorted(list(map(int, input().split())), reverse=True) # 적재 용량

    answer = 0
    w_index = 0
    t_index = 0

    while w_index < N and t_index < M:
        if T[t_index] >= W[w_index]:
            answer += W[w_index]
            t_index += 1

        w_index += 1

    print(f'#{test_case} {answer}')