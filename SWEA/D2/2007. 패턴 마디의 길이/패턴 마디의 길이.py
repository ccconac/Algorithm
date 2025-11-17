T = int(input())

for test_case in range(1, T + 1):
    string = input()
    answer = 0

    for i in range(1, 11):
        if string[:i] == string[i:i * 2]:
            print(f'#{test_case} {i}')
            break