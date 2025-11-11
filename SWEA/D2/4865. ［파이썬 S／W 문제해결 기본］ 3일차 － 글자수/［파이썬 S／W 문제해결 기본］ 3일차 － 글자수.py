T = int(input())

for test_case in range(1, T + 1):
    str1 = input()
    str2 = input()
    
    dictionary = {}
    
    for c1 in str1: dictionary[c1] = 0
    for c2 in str2:
        if c2 in dictionary: dictionary[c2] += 1

    answer = max(dictionary.values())
    print(f'#{test_case} {answer}')