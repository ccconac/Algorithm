def is_palindrome(word):
    return word == word[::-1]

for test_case in range(1, 11):
    N = int(input())
    words = [list(input().strip()) for _ in range(8)]
    t_words = [list(row) for row in zip(*words)]

    answer = 0
    # 팰린드롬 검사
    for i in range(8):
        for j in range(8 - N + 1):
            word = ''.join(words[i][j:j+N])
            t_word = ''.join(t_words[i][j:j+N])
            if is_palindrome(word):
                answer += 1

            if is_palindrome(t_word):
                answer += 1

    print(f'#{test_case} {answer}')