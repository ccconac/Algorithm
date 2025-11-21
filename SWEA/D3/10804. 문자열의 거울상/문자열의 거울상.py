T = int(input())

for test_case in range(1, T + 1):
    word = list(reversed(input()))

    for i in range(len(word)):
        if word[i] == 'q':
            word[i] = 'p'
        elif word[i] == 'p':
            word[i] = 'q'
        elif word[i] == 'b':
            word[i] = 'd'
        elif word[i] == 'd':
            word[i] = 'b'

    answer = ''.join(word)
    print(f'#{test_case} {answer}')