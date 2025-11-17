T = int(input())

for test_case in range(1, T + 1):
    str1 = input()
    str2 = input()

    str1_length, str2_length = len(str1), len(str2)
    answer = 0

    for i in range(str2_length - str1_length + 1):
        temp = str2[i:i+str1_length]

        if str1 == temp:
            answer = 1
            break

    print(f'#{test_case} {answer}')