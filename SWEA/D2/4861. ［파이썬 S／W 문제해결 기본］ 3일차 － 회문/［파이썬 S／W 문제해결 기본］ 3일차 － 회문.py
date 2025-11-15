T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    words = [input() for _ in range(N)]
    answer = ''

    # 행 먼저 탐색
    for row in words:
        for i in range(N - M + 1):
            candidate = row[i:i + M]
            if candidate == candidate[::-1]:
                answer = candidate
                break

        if answer:
            break

    # 행 탐색에서 회문 찾지 못했다면, 열 탐색
    if not answer:
        for col in range(N):
            col_strings = ''.join([words[row][col] for row in range(N)])
            for i in range(N - M + 1):
                candidate = col_strings[i:i + M]
                if candidate == candidate[::-1]:
                    answer = candidate
                    break

            if answer:
                break

    print(f'#{test_case} {answer}')