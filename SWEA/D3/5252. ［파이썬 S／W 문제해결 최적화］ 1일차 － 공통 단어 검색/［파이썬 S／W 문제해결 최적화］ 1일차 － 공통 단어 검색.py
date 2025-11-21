T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    A_words = set()

    for _ in range(N):
        A_word = input()
        A_words.add(A_word)

    answer = 0
    for _ in range(M):
        B_word = input()
        if B_word in A_words:
            answer += 1

    print(f'#{test_case} {answer}')