T = int(input())

for test_case in range(1, T + 1):
    word = input()
    vowels = ['a', 'e', 'i', 'o', 'u']
    answer = ''

    for c in word:
        if c not in vowels:
            answer += c

    print(f'#{test_case} {answer}')