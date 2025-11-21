for test_case in range(1, 11):
    T = int(input())
    word = input()
    string = input()

    arr = []
    w_length = len(word)
    s_length = len(string)

    for i in range(s_length - w_length + 1):
        arr.append(string[i:i+w_length])

    answer = arr.count(word)

    print(f'#{test_case} {answer}')