T = int(input())

for test_case in range(1, T + 1):
    str1 = input()
    str2 = input()

    dictionary = {}

    for c in str1:
        dictionary[c] = 0

    for c in str2:
        if c in dictionary:
            dictionary[c] += 1

    answer = max(dictionary.values())

    print(f'#{test_case} {answer}')