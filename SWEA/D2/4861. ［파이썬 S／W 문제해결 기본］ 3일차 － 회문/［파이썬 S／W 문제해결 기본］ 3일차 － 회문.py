T = int(input())

def is_palindrome(word):
    return word == word[::-1]

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    words = [list(map(str, input().strip())) for _ in range(N)]
    t_words = list(map(list, zip(*words)))
    result = ''

    for i in range(N):
        for j in range(N - M + 1):
            word = words[i][j:j+M]
            t_word = t_words[i][j:j+M]

            if is_palindrome(word):
                result = word
                break

            if is_palindrome(t_word):
                result = t_word
                break

        if result:
            break

    answer = ''.join(result)
    print(f'#{test_case} {answer}')