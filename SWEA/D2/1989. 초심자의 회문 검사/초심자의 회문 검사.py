T = int(input())

for test_case in range(1, T + 1):
    string = input()
    answer = 0

    if string == string[::-1]:
        answer = 1

    print(f'#{test_case} {answer}')